export const sandbox=
{
  on(event,callback)
 {
   document.addEventListener(event,(e)=>callback(e.detail));
 },

 dispatch(event,data,ctx)
 {
   ctx= ctx || document;
   ctx.dispatchEvent(new CustomEvent(event,{bubbles:true, composed:true, detail:data}));
 }

}

//sandbox.on('custom-event',this.methodName.bind(this))
//sandbox.dispatch('custom-event',data,ctx)