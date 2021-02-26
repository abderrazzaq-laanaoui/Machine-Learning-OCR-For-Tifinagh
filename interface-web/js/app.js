$(document).ready(function(){

    var imageBoard = new DrawingBoard.Board('board',{
    size: 10, 
    color:'#000',
    controls: [
        {Size: {type: "Range"}},
        {Navigation: { back: true, forward: false }},
    ],
    webStorage: true
});
    $("#cnvrtBtn").click(function(){
        domtoimage.toBlob(document.getElementsByClassName('drawing-board-canvas')[0]).then(function(blob){       
        window.saveAs(blob, 'tifinagh.png');
    })
})
  
})

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}