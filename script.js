
const fire = ()=>{
    let amount = $('#amount').val()
    let start = $('#start').val()
    let end = $('#end').val()
    start=Number(start)
    end=Number(end)
    if(start<0)start=0
    if(end<start)end=start
    let ans = ''
    for (let i = 0; i < amount; i++) {
     
        kk = Math.floor(Math.random() * (Number(end) - Number(start) + 1)) + Number(start);
       // console.log(kk);
        ans+=kk +' '
    }
    $('#output').text(ans)
}



// Get the text to copy and copy button
var copyText = document.getElementById("output");
var copyBtn = document.getElementById("copybtn");

// Add click event listener to copy button
copyBtn.addEventListener("click", function() {

  // Select the text to copy
  var range = document.createRange();
  range.selectNode(copyText);
  window.getSelection().removeAllRanges(); 
  window.getSelection().addRange(range);

  // Copy selection
  document.execCommand("copy");
  
  // Deselect everything
  window.getSelection().removeAllRanges();

  // Show confirmation
  alert("Text copied");
}); 

