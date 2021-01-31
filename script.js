        // handle Generate Random Button Event
        document.getElementById('generate-btn').addEventListener('click', function(){
            const randonNumber = Math.random()*10000;
            const roundRandomNumber = Math.round(randonNumber);            
            const numberLength = roundRandomNumber.toString().length;
            if(numberLength == 4){
                document.getElementById('random-number').value = roundRandomNumber;
            }
        })
        // handle Calculator Button Event
        document.getElementById('digits-container').addEventListener('click', function(event){
            const digit = event.target.innerText;
            if(isNaN(digit)){

            }else{
                const inputValue = document.getElementById('input-digit').value;
                document.getElementById('input-digit').value = inputValue + digit;
            }
        })
        // handle Submit Button Event
        document.getElementById('submit-btn').addEventListener('click', function(event){
            const randonPin = document.getElementById('random-number').value;
            const typedPin = document.getElementById('input-digit').value;
            if(randonPin === typedPin){
                document.getElementById('success').style.display = 'block';
                document.getElementById('error').style.display = 'none';
            }else{
                document.getElementById('error').style.display = 'block';              
                document.getElementById('success').style.display = 'none';
            }
        })
        // handle Submit Button Event
        document.getElementById('clear').addEventListener('click', function(event){
            document.getElementById('input-digit').value = "";
        })