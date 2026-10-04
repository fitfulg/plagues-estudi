(function(root){
  'use strict';
  function shuffle(items,random=Math.random){const out=[...items];for(let i=out.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[out[i],out[j]]=[out[j],out[i]];}return out;}
  function chooseQuestions(card,random=Math.random){
    const pool=shuffle(card.questions,random), result=[];
    if(card.learning){
      for(const q of pool){
        if(result.length===2)break;
        const naming=['Identificació','Nom científic'];
        if(!result.some(x=>x.kind===q.kind || (naming.includes(x.kind)&&naming.includes(q.kind))))result.push(q);
      }
      return result.map(q=>({...q,options:shuffle([q.answer,...shuffle(q.distractors,random).slice(0,3)],random)}));
    }
    const identity=pool.find(q=>q.kind==='Identificació')||pool.find(q=>q.kind==='Classificació')||pool[0];
    result.push(identity);
    const specific=pool.find(q=>!result.includes(q)&&!['Identificació','Nom científic','Classificació','Metamorfosi','Aparell bucal'].includes(q.kind));
    if(specific)result.push(specific);
    for(const q of pool){if(result.length>=2)break;if(!result.includes(q)&&!result.some(x=>x.kind===q.kind))result.push(q);}
    return result.map(q=>({...q,options:shuffle([q.answer,...shuffle(q.distractors,random).slice(0,3)],random)}));
  }
  function createSession(cards,previousId=null,random=Math.random){
    let deck=shuffle(cards,random);
    if(cards.length&&cards.every(c=>c.learningSection)){
      const sections=shuffle([...new Set(cards.map(c=>c.learningSection))],random);
      const buckets=sections.map(section=>deck.filter(c=>c.learningSection===section));
      deck=[];
      while(buckets.some(b=>b.length))for(const bucket of buckets)if(bucket.length)deck.push(bucket.pop());
    }
    if(deck.length>1&&deck[0].id===previousId)[deck[0],deck[1]]=[deck[1],deck[0]];
    return deck.slice(0,10).map(card=>({card,image:card.images[Math.floor(random()*card.images.length)],questions:chooseQuestions(card,random)}));
  }
  const api={shuffle,chooseQuestions,createSession};
  if(typeof module!=='undefined'&&module.exports)module.exports=api;
  else root.PlagueEngine=api;
})(typeof window!=='undefined'?window:globalThis);

