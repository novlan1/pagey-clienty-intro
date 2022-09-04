function $(selector) {
  return document.querySelector(selector);
}
let tapDom;

window.onload = function () {
  tapDom = $('#showPlace');
  console.log('tapDom', tapDom);
};

document.onmousemove = function (ev) {
  const e = ev || window.event;
  console.log('e', e);
  const { target } = e;
  const rect = target.getBoundingClientRect();
  tapDom.innerHTML = `
  鼠标事件属性：
  <br>
  clientX: ${e.clientX},clientY:${e.clientY}
  </br> 
  x: ${e.x},y:${e.y}
  </br> 
  screenX:${e.screenX},screenY:${e.screenY}
  </br> 
  offsetX:${e.offsetX},offsetY:${e.offsetY}
  </br> 
  pageX:${e.pageX},pageY:${e.pageY}
  <br>
  <br>

  元素属性：
  <br>
  clientWidth: ${target.clientWidth}, clientHeight: ${target.clientHeight}
  <br>
  offsetWidth: ${target.offsetWidth}, offsetHeight: ${target.offsetHeight}
  <br>
  clientLeft: ${target.clientLeft}, clientTop: ${target.clientTop}
  <br>
  offsetLeft: ${target.offsetLeft}, offsetTop: ${target.offsetTop}
  <br>
  scrollWidth: ${target.scrollWidth}, scrollHeight: ${target.scrollHeight}
  <br>
  <br>
  
  元素 getBoundingClientRect：
  <br>
  width: ${rect.width}, height: ${rect.height}
  <br>
  top: ${rect.top}, bottom: ${rect.bottom}
  <br>
  left: ${rect.left}, right: ${rect.right}
  <br>
  x: ${rect.x}, y: ${rect.y}
  <br>
  <br>

  window属性：
  <br>
  window.innerWidth: ${window.innerWidth}, window.innerHeight: ${window.innerHeight}
  <br>
  window.outerWidth: ${window.outerWidth}, window.outerHeight: ${window.outerHeight}
  <br>
  window.screenLeft: ${window.screenLeft}, window.screenTop: ${window.screenTop}
  <br>
  window.screenX: ${window.screenX}, window.screenY: ${window.screenY}
  <br>
  window.scrollX: ${window.scrollX}, window.scrollY: ${window.scrollY}
  `;
};

/*  function test(ev) {
            var e = ev || window.event;
            var div1 = document.getElementById('div1');
            div1.innerHTML = "offsetX:"+ e.offsetX +",offsetY : "+ e.offsetY;
        }*/
