document.getElementById('btn-login').addEventListener('click', function(event){
    // event.preventDefault();
    console.log('Login Button clicked');

    const mobileNumber= 12345678910;
    const pin= 1234;

    const mobileNumberValue= document.getElementById('input-mobile-number').value;
    const mobileNumvertedConverted2Int= parseInt(mobileNumberValue);

    const pinValue= document.getElementById('input-pin').value;
    const pinConverted2Int= parseInt(pinValue);

    console.log(mobileNumvertedConverted2Int, pinConverted2Int);
    if (mobileNumvertedConverted2Int==mobileNumber && pinConverted2Int==pin){
        // console.log('All values matched');
        window.location.href='./home.html';
    } else {
        // console.log('Invalid credentials');
        alert('Invalid Credentials');
    }
});