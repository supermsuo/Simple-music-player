document.addEventListener('DOMContentLoaded', function() {  
      var songList = document.getElementById('songList');  
      var audioPlayer = document.getElementById('audioPlayer');  
      var playPauseBtn = document.getElementById('playPauseBtn');  
      var songTitle = document.getElementById('songTitle');  
  
      // 为歌曲清单中的链接添加点击事件  
      songList.addEventListener('click', function(e) {  
        var target = e.target;  
        if (target.tagName.toLowerCase() === 'a') {  
          e.preventDefault(); // 阻止默认的链接跳转行为  
          var song = target.getAttribute('data-song');  
          var path = target.getAttribute('data-path');  
          audioPlayer.src = path; // 设置音频源  
          songTitle.textContent = song; // 更新歌曲名称  
          audioPlayer.play(); // 播放音乐  
        }  
      });  
  
      // 为播放/暂停按钮添加点击事件  
      playPauseBtn.addEventListener('click', function() {  
        if (audioPlayer.paused) {  
          audioPlayer.play();  
          playPauseBtn.textContent = '暂停';  
        } else {  
          audioPlayer.pause();  
          playPauseBtn.textContent = '播放';  
        }  
      });  
    });  
document.addEventListener('DOMContentLoaded', function() {  
  // ... 其他代码 ...  
  
  // 获取播放/暂停按钮  
  var playPauseBtn = document.getElementById('playPauseBtn');  
  
  // 为播放/暂停按钮添加点击事件  
  // ... 其他代码 ...  
  
  // 将播放/暂停按钮添加到容器中  
  var buttonContainer = document.getElementById('buttonContainer');  
  buttonContainer.appendChild(playPauseBtn);  
});