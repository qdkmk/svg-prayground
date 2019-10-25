
new Vivus('target-delayed', {duration: 100 , start: 'autostart', type: 'delayed'},function(obj){
obj.el.classList.add('finished');
});
