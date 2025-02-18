        const form = document.getElementById('registrationForm');
        const submitButton = document.getElementById('submitButton');

        form.addEventListener('input', () => {
            validateForm();
        });

        form.addEventListener('submit', function(event) {
            event.preventDefault();

        
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const age = document.getElementById('age').value;
            const gender = document.querySelector('input[name="gender"]:checked').value;
            const profession = document.getElementById('profession').value;
            const password = document.getElementById('password').value;

            console.log({ name, email, age, gender, profession, password });

            
            form.reset();
            submitButton.disabled = true; 
        });

        function validateForm() {
            let isValid = true;
            
            const name = document.getElementById('name');
            if (!name.checkValidity()) {
                const errorMsg = name.validity.valueMissing ? 'Это поле обязательно для заполнения.' : 'Имя должно содержать только буквы и пробелы (2-20 символов).';
                document.getElementById('nameError').textContent = errorMsg;
                isValid = false;
            }

            
            const email = document.getElementById('email');
            if (!email.checkValidity()) {
                const errorMsg = email.validity.valueMissing ? 'Это поле обязательно для заполнения.' : 'Введите корректный email.';
                document.getElementById('emailError').textContent = errorMsg;
                isValid = false;
            }

            
            const age = document.getElementById('age');
            if (!age.checkValidity()) {
                document.getElementById('ageError').textContent = 'Это поле обязательно для заполнения.';
                isValid = false;
            }

            
            const profession = document.getElementById('profession');
            if (!profession.checkValidity()) {
                document.getElementById('professionError').textContent = 'Выберите профессию.';
                isValid = false;
            }

            
            const password = document.getElementById('password');
            if (!password.checkValidity()) {
                const errorMsg = password.validity.valueMissing ? 'Это поле обязательно для заполнения.' : 'Пароль должен содержать как минимум 8 символов, 1 заглавную букву и 1 цифру.';
                document.getElementById('passwordError').textContent = errorMsg;
                isValid = false;
            }

        
            const consent = document.getElementById('consent');
            if (!consent.checked) {
                document.getElementById('consentError').textContent = 'Вы должны согласиться на обработку данных.';
                isValid = false;
            }

        
            submitButton.disabled = !isValid;
        }

        
        const inputs = document.querySelectorAll('input, select');
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.style.borderColor = '#007bff';
            });
            input.addEventListener('blur', () => {
                input.style.borderColor = '';
                validateForm();
            });
        });