
const fire = ()=>{
    let amount = $('#amount').val()
    let start = $('#start').val()
    let end = $('#end').val()
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
