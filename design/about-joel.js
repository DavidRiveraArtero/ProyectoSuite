var audio = $("#calvo")[0];
$("nav a").mouseenter(function(){
    audio.play();
});
// $('#myModal').on('shown.bs.modal', function () {
//     $('#myInput').trigger('focus')
// });
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})

var videos = document.getElementsByTagName("video");
var prevBtn = document.getElementsByClassName("carousel-control-prev")[0];
var nextBtn = document.getElementsByClassName("carousel-control-next")[0];

var cur = 0;
var max = videos.length;
console.log("Loaded videos: " + max);

var playVideos = function(){
  // Pause all videos
  for (v=0; v<max; v++) {
    videos[v].pause();
  }
  // Play current video
  console.log("Play video " + cur);
  videos[cur].play();
}

prevBtn.addEventListener("click", function(){
  cur = (cur-1 >= 0) ? cur-1 : max;
  playVideos();
});

nextBtn.addEventListener("click", function(){
  cur = (cur+1 < max) ? cur+1 : 0;
  playVideos();
});