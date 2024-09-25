let result = '';

    const ratingNumber = document.querySelectorAll('.js-rating');

        ratingNumber.forEach(number => {
            number.addEventListener('click', ()=> {
                const displayRating = number.textContent;

                if (displayRating === '1') {
                    result = 1;
                } else if (displayRating === '2') {
                    result = 2;
                } else if (displayRating === '3') {
                    result = 3;
                } else if (displayRating === '4') {
                    result = 4;
                } else if (displayRating === '5') {
                    result = 5;
                }

                number.classList.add('rating-pressed');

                document.querySelector('.js-ratings-clicked').innerText = `You selected ${result} out of 5`;
            });
        });

    const submitButtons = document.querySelector('.js-submit-button');

    submitButtons.addEventListener('click' , () => {
    rating();
    });

    function rating () { 
        let firstCard = document.querySelector('.js-firstcard');
        let thankYou = document.querySelector('.js-thank-you-card');

        firstCard.style.display = 'none';
        thankYou.style.display = 'block';
    }
