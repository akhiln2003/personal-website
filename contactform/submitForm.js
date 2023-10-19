$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbwjrawv-1gx3DOPvxD4-w4Vp1wrXiKZJbc-5d2xpNkbqFO7ELFmaMKxsp9blYH7uVA/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            document.getElementById("success-message").innerHTML="Submitted Successfully..!"
            
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})