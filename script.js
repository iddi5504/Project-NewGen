function donate(){
    Swal.fire({
    title:'Donate',
    text:"You can make donations via our bitcoin . Scan QR code or copy bitcoin address : 32LCcNgsvLkQfpBpsBMEYr6iApSmTs22gY",  
    imageUrl:"./qr.png",
    imageHeight:300,
    allowOutsideClick:'false',
    padding:"1em",
    
}) 
  }

function submit(){
    Swal.fire({
        title:'Thanks for Subscribing to our newsletter ',
        icon:"success",
        text:"You will receive newsletters and donation updates",  
    }) 
}

