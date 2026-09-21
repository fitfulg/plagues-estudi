/* Buildless, offline-compatible: local relative assets only. */
(()=>{
  'use strict';
  const $=id=>document.getElementById(id), data=window.PLAGUES_DATA;
  let rounds=[],ri=0,qi=0,score=0,answered=0,locked=false,history=[],total=0,lastCard=null;
  const current=()=>rounds[ri], question=()=>current().questions[qi];
  function stats(){
    $('round-count').textContent=`${Math.min(ri+1,rounds.length)} / ${rounds.length}`;
    $('score-count').textContent=score;
    $('answer-count').textContent=`${answered} / ${total}`;
    $('progress').max=total;$('progress').value=answered;
    $('progress-label').textContent=answered?`${Math.round(answered/total*100)}% de la sessió`:'Comencem!';
  }
  function start(){
    rounds=PlagueEngine.createSession(data.cards,lastCard);ri=0;qi=0;score=0;answered=0;history=[];total=rounds.reduce((n,r)=>n+r.questions.length,0);
    $('game').hidden=false;$('results').hidden=true;render(false);
  }
  function render(focus=true){
    const r=current(),q=question();locked=false;lastCard=r.card.id;
    $('photo').src=r.image.image;$('photo').alt='Fotografia del temari per identificar: observa l’exemplar o els símptomes.';$('photo').hidden=false;$('image-error').hidden=true;
    $('image-label').textContent=`IMATGE ${String(ri+1).padStart(2,'0')}`;
    $('photo-caption').textContent=qi?'Continua amb la mateixa imatge.':'Observa la fotografia abans de respondre.';
    $('category').textContent=q.kind;$('question-count').textContent=`Pregunta ${qi+1} de ${r.questions.length}`;
    $('question').textContent=q.prompt;$('feedback').replaceChildren();$('feedback').className='feedback';
    $('study-card').replaceChildren();$('study-toolbar').hidden=true;
    $('study-view').hidden=true;$('question-view').hidden=false;$('question-stage').style.height='';
    $('toggle-study').textContent='Mostra la fitxa d’estudi';$('toggle-study').setAttribute('aria-expanded','false');
    $('source-details').hidden=true;$('source-details').open=false;
    $('help').textContent='Tria una opció per continuar.';$('next').disabled=true;
    $('next').textContent=qi===r.questions.length-1?(ri===rounds.length-1?'Veure el resultat →':'Següent imatge →'):'Següent pregunta →';
    $('options').replaceChildren();
    q.options.forEach((option,i)=>{
      const button=document.createElement('button');button.className='option';button.type='button';
      const badge=document.createElement('span');badge.className='letter';badge.setAttribute('aria-hidden','true');badge.textContent=String.fromCharCode(65+i);
      const label=document.createElement('span');label.textContent=option;button.append(badge,label);
      button.addEventListener('click',()=>answer(option));$('options').append(button);
    });stats();if(focus)$('question').focus({preventScroll:true});
  }
  function showStudy(card){
    const panel=$('study-card');panel.replaceChildren();
    const title=document.createElement('h3');title.textContent='Fitxa d’estudi';panel.append(title);
    function fields(rows){
      const list=document.createElement('dl');
      rows.forEach(row=>{const term=document.createElement('dt');term.textContent=row.label;const description=document.createElement('dd');description.textContent=row.text;list.append(term,description);});
      panel.append(list);
    }
    const identity=[{label:'Nom',text:card.name}];
    if(card.science)identity.push({label:'Nom científic',text:card.science});
    if(card.group)identity.push({label:'Classificació',text:card.group});
    fields([...identity,...card.study]);
    if(card.groupStudy.fields.length){
      const subtitle=document.createElement('h4');subtitle.textContent=`Característiques del grup · ${card.group}`;panel.append(subtitle);
      fields(card.groupStudy.fields);
    }
    const source=document.createElement('p');source.className='source-ref';
    const pages=[...new Set([card.page,card.groupStudy.page,...(card.group==='Hemípters · esternorrincs'?[21]:[])])].sort((a,b)=>a-b);
    source.textContent=`Font: temari original · ${pages.length>1?'pàgines':'pàgina'} ${pages.join(', ')}.`;
    panel.append(source);
  }
  function toggleStudy(){
    if(!locked)return;
    const opening=$('study-view').hidden;
    if(opening){
      $('question-stage').style.height=`${$('question-view').getBoundingClientRect().height}px`;
      $('question-view').hidden=true;$('study-view').hidden=false;$('study-view').scrollTop=0;
    }else{
      $('study-view').hidden=true;$('question-view').hidden=false;$('question-stage').style.height='';
    }
    $('toggle-study').textContent=opening?'Torna a la pregunta':'Mostra la fitxa d’estudi';
    $('toggle-study').setAttribute('aria-expanded',String(opening));
  }
  function answer(value){
    if(locked)return;locked=true;const q=question(),r=current(),correct=value===q.answer;
    $('photo').src=r.image.original;
    $('photo').alt=`Fotografia original amb el rètol: ${r.card.name}`;
    $('photo-caption').textContent='Imatge original amb el rètol del temari.';
    answered++;if(correct)score++;
    history.push({card:r.card.name,prompt:q.prompt,chosen:value,answer:q.answer,correct,page:q.page});
    [...$('options').children].forEach((button,i)=>{button.disabled=true;const option=q.options[i];if(option===q.answer){button.classList.add('correct');button.firstChild.textContent='✓';button.setAttribute('aria-label',`Resposta correcta: ${option}`);}else if(option===value){button.classList.add('wrong');button.firstChild.textContent='×';button.setAttribute('aria-label',`Resposta incorrecta: ${option}`);}});
    const heading=document.createElement('strong');heading.textContent=correct?'✓ Correcte!':'Repassem-ho: la resposta correcta és…';
    const answerText=document.createElement('p');answerText.textContent=q.answer;
    const excerpt=document.createElement('p');excerpt.textContent=q.quote;
    const ref=document.createElement('p');ref.className='source-ref';ref.textContent=`Segons el temari · pàgina impresa ${q.page}`;
    $('feedback').append(heading,answerText,excerpt,ref);if(!correct)$('feedback').classList.add('incorrect');
    showStudy(r.card);
    $('study-toolbar').hidden=false;
    $('help').textContent=correct?'Un encert més. Continua!':'Aprendre també és corregir.';$('next').disabled=false;
    {
      $('source-details').hidden=false;$('original').src=r.image.original;$('source-name').textContent=r.card.name;
      $('source-note').textContent=r.card.note||'Fotografia associada al nom que figura al PDF. Les característiques del grup es pregunten com a tals.';
      $('source-page').textContent=`Font de la imatge: pàgina impresa ${r.image.page}.`;
    }stats();$('next').focus({preventScroll:true});
  }
  function next(){
    if(!locked)return;
    if(qi+1<current().questions.length){qi++;render();}
    else if(ri+1<rounds.length){ri++;qi=0;render();$('game').scrollIntoView({block:'start',behavior:'instant'});}
    else finish();
  }
  function finish(){
    $('game').hidden=true;$('results').hidden=false;const pct=Math.round(score/total*100);
    $('result-title').textContent=pct===100?'Les has encertat totes!':pct>=70?'Molt bona feina!':'Cada ronda és un pas més.';
    $('result-score').textContent=`${score} / ${total}`;
    $('result-message').textContent=`${pct}% d’encerts · Has completat ${rounds.length} rondes. Una nova sessió barrejarà les imatges i les preguntes.`;
    $('review').replaceChildren();const mistakes=history.filter(x=>!x.correct);
    if(mistakes.length){const h=document.createElement('h3');h.textContent='Per repassar';$('review').append(h);
      for(const m of mistakes){const item=document.createElement('div');item.className='review-item';const title=document.createElement('strong');title.textContent=m.card;const p=document.createElement('p');p.textContent=m.prompt;const a=document.createElement('p');a.textContent=`✓ ${m.answer}`;const ref=document.createElement('span');ref.className='source-ref';ref.textContent=`La teva resposta: ${m.chosen} · Pàgina ${m.page}`;item.append(title,p,a,ref);$('review').append(item);}
    }$('result-title').focus();$('results').scrollIntoView({block:'start',behavior:'instant'});
  }
  $('toggle-study').addEventListener('click',toggleStudy);
  $('next').addEventListener('click',next);$('restart').addEventListener('click',start);$('again').addEventListener('click',()=>{start();$('game').scrollIntoView({block:'start',behavior:'instant'});});
  $('photo').addEventListener('error',()=>{$('photo').hidden=true;$('image-error').hidden=false;[...$('options').children].forEach(b=>b.disabled=true);$('help').textContent='Cal carregar la imatge per poder respondre.';});
  start();
})();
