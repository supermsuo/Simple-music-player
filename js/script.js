// 获取侧边栏和主内容元素  
const sidebar = document.getElementById('sidebar');  
const mainContent = document.querySelector('.main-content');  
  
// 初始侧边栏状态，例如：默认收缩  
let sidebarExpanded = false;  
  
// 侧边栏点击事件监听器  
sidebar.addEventListener('click', function(event) {  
  // 阻止事件冒泡，防止点击侧边栏时触发主内容的点击事件  
  event.stopPropagation();  
    
  // 切换侧边栏的展开/收缩状态  
  sidebarExpanded = !sidebarExpanded;  
    
  // 根据状态更新侧边栏的样式  
  sidebar.classList.toggle('expanded');  
});  
  
// 主内容点击事件监听器  
mainContent.addEventListener('click', function() {  
  // 当点击主内容时，收缩侧边栏  
  sidebarExpanded = false;  
  sidebar.classList.remove('expanded');  
});  
  
// CSS样式，用于控制侧边栏的展开和收缩  