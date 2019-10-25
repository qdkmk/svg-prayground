let targetOne = new Vivus('target-one', {duration: 100 , start: 'autostart', type:'oneByOne'},function(obj){
  obj.el.classList.add('finished');
});

//replay
document.getElementById('replay').addEventListener('click',()=>{

  //塗りをしている箇所のclassを削除

  document.getElementById('target-one').classList.remove('finished');

  //アニメーションをストップ→リセット→再生
  targetOne.stop().reset().play(1);

});

//rewind
document.getElementById('rewind').addEventListener('click',()=>{
  if($('.svg').hasClass('finished')){
      console.log('test');
      targetDelayed.play(-3);
      targetSync.play(-3);
      targetOne.play(-3);
      setTimeout(()=>{
        $('.svg').removeClass('finished');
      },1200);
  }
});
