{
    //punten bij letters rosarch per seizoen (elk seizoen andere punten)
    const pointsSummer = [
        { character: `a`, punt: 1 },
        { character: `b`, punt: 1 },
        { character: `c`, punt: 1 },
        { character: `d`, punt: 1 },
        { character: `e`, punt: 1 },
        { character: `f`, punt: 1 },
        { character: `g`, punt: 1 },
        { character: `h`, punt: 1 },
        { character: `i`, punt: 1 },
        { character: `j`, punt: 2 },
        { character: `k`, punt: 3 },
        { character: `l`, punt: 4 },
        { character: `m`, punt: 5 },
        { character: `n`, punt: 6 },
        { character: `o`, punt: 7 },
        { character: `p`, punt: 8 },
        { character: `q`, punt: 9 },
        { character: `r`, punt: 10 },
        { character: `s`, punt: 10 },
        { character: `t`, punt: 9 },
        { character: `u`, punt: 8 },
        { character: `v`, punt: 7 },
        { character: `w`, punt: 6 },
        { character: `x`, punt: 5 },
        { character: `y`, punt: 4 },
        { character: `z`, punt: 3 },
        { character: ` `, punt: 2 }
    ];

    const pointsFall = [
        { character: `a`, punt: 5 },
        { character: `b`, punt: 6 },
        { character: `c`, punt: 7 },
        { character: `d`, punt: 8 },
        { character: `e`, punt: 9 },
        { character: `f`, punt: 10 },
        { character: `g`, punt: 9 },
        { character: `h`, punt: 8 },
        { character: `i`, punt: 7 },
        { character: `j`, punt: 8 },
        { character: `k`, punt: 9 },
        { character: `l`, punt: 10 },
        { character: `m`, punt: 9 },
        { character: `n`, punt: 8 },
        { character: `o`, punt: 7 },
        { character: `p`, punt: 6 },
        { character: `q`, punt: 5 },
        { character: `r`, punt: 4 },
        { character: `s`, punt: 3 },
        { character: `t`, punt: 2 },
        { character: `u`, punt: 1 },
        { character: `v`, punt: 1 },
        { character: `w`, punt: 1 },
        { character: `x`, punt: 1 },
        { character: `y`, punt: 1 },
        { character: `z`, punt: 1 },
        { character: ` `, punt: 1 }
    ];

    const pointsWinter = [
        { character: `a`, punt: 5 },
        { character: `b`, punt: 4 },
        { character: `c`, punt: 3 },
        { character: `d`, punt: 2 },
        { character: `e`, punt: 1 },
        { character: `f`, punt: 1 },
        { character: `g`, punt: 1 },
        { character: `h`, punt: 1 },
        { character: `i`, punt: 1 },
        { character: `j`, punt: 2 },
        { character: `k`, punt: 3 },
        { character: `l`, punt: 4 },
        { character: `m`, punt: 5 },
        { character: `n`, punt: 6 },
        { character: `o`, punt: 7 },
        { character: `p`, punt: 8 },
        { character: `q`, punt: 9 },
        { character: `r`, punt: 10 },
        { character: `s`, punt: 9 },
        { character: `t`, punt: 8 },
        { character: `u`, punt: 8 },
        { character: `v`, punt: 9 },
        { character: `w`, punt: 10 },
        { character: `x`, punt: 9 },
        { character: `y`, punt: 8 },
        { character: `z`, punt: 7 },
        { character: ` `, punt: 6 }
    ];

    const pointsSpring = [
        { character: `a`, punt: 4 },
        { character: `b`, punt: 5 },
        { character: `c`, punt: 6 },
        { character: `d`, punt: 7 },
        { character: `e`, punt: 8 },
        { character: `f`, punt: 9 },
        { character: `g`, punt: 10 },
        { character: `h`, punt: 9 },
        { character: `i`, punt: 8 },
        { character: `j`, punt: 7 },
        { character: `k`, punt: 6 },
        { character: `l`, punt: 5 },
        { character: `m`, punt: 4 },
        { character: `n`, punt: 5 },
        { character: `o`, punt: 6 },
        { character: `p`, punt: 7 },
        { character: `q`, punt: 8 },
        { character: `r`, punt: 9 },
        { character: `s`, punt: 10 },
        { character: `t`, punt: 9 },
        { character: `u`, punt: 8 },
        { character: `v`, punt: 7 },
        { character: `w`, punt: 6 },
        { character: `x`, punt: 5 },
        { character: `y`, punt: 4 },
        { character: `z`, punt: 3 },
        { character: ` `, punt: 3 }
    ];

    // foto rorschach veranderen per seizoen
    const handleChangeImage = e => {
        const $seasons = e.currentTarget;
        const result = document.querySelector('.description__image');

        const $selectedSeason = $seasons.querySelector(`.season:checked`);
        if ($selectedSeason.value == 1) {
            result.innerHTML = '<img src="assets/images/psycho-03.jpg" alt="" class="psycho">';
        }
        else if ($selectedSeason.value == 2) {
            result.innerHTML = '<img src="assets/images/psycho-05.jpg" alt="" class="psycho">';
        }
        else if ($selectedSeason.value == 3) {
            result.innerHTML = '<img src="assets/images/psycho-06.jpg" alt="" class="psycho">';
        }
        else if ($selectedSeason.value == 4) {
            result.innerHTML = '<img src="assets/images/psycho-07.jpg" alt="" class="psycho">';
        }
    }

    //input text veranderen naar punt adhv de verschillende arrays voor de verschillende seizoenen
    const letterToPointSummer = letter => {
        const item = pointsSummer.find(item => item.character === letter.toLowerCase());
        if (item === undefined) {
            return 0;
        }
        return item.punt;
    }
    const letterToPointFall = letter => {
        const item = pointsFall.find(item => item.character === letter.toLowerCase());
        if (item === undefined) {
            return 0;
        }
        return item.punt;
    }
    const letterToPointWinter = letter => {
        const item = pointsWinter.find(item => item.character === letter.toLowerCase());
        if (item === undefined) {
            return 0;
        }
        return item.punt;
    }
    const letterToPointSpring = letter => {
        const item = pointsSpring.find(item => item.character === letter.toLowerCase());
        if (item === undefined) {
            return 0;
        }
        return item.punt;
    }


    //uitvoering wanneer het formulier ingediend wordt + letters vertalen naar cijfers en deze bijeen tellen
    const handleSubmitRegistration = e => {
        e.preventDefault();
        const $form = e.currentTarget;

        const $text = $form.querySelector(`.rorschach`).value;
        const letters = $text.split('');

        const $selectedSeason = $form.querySelector(`.season:checked`).value;

        if ($selectedSeason == 1) {
            const points = letters.map(letterToPointSummer);
            const result = points.reduce(reducer);
            outcome(result);

        } else if ($selectedSeason == 2) {
            const points = letters.map(letterToPointFall);
            const result = points.reduce(reducer);
            outcome(result);
        }
        else if ($selectedSeason == 3) {
            const points = letters.map(letterToPointWinter);
            const result = points.reduce(reducer);
            outcome(result);
        }
        else if ($selectedSeason == 4) {
            const points = letters.map(letterToPointSpring);
            const result = points.reduce(reducer);
            outcome(result);
        }
    }


    //punten optellen en resultaat
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    // het resultaat weergeven
    const outcome = result => {
        const $result = document.querySelector(`.result`);
        const $fortune = document.createElement(`div`);
        $fortune.classList.add(`.result`);
        if (result < 10) {
            $fortune.innerHTML = `<img class="fortune" src="assets/images/0.jpg" alt="0 toilet rolls"width="960">`;
            $result.appendChild($fortune);
        } else if (result < 20) {
            $fortune.innerHTML = `<img class="fortune" src="assets/images/1.jpg" alt="1 toilet roll" width="960">`;
            $result.appendChild($fortune);
        } else if (result < 30) {
            $fortune.innerHTML = `<img class="fortune" src="assets/images/2.png" alt="50.421 toilet rolls" width="960">`;
            $result.appendChild($fortune);
        } else if (result < 40) {
            $fortune.innerHTML = `<img class="fortune" src="assets/images/3.png" alt="60.322 toilet rolls" width="960">`;
            $result.appendChild($fortune);
        } else if (result < 50) {
            $fortune.innerHTML = `<img class="fortune" src="assets/images/4.png" alt="60.322 toilet rolls" width="960">`;
            $result.appendChild($fortune);
        } else if (result > 50) {
            $fortune.innerHTML = `<img class="fortune" src="assets/images/5.png" alt="560.043 toilet rolls" width="960">`;
            $result.appendChild($fortune);
        }

    }

    const init = () => {
        const $seasons = document.querySelector(`.season-wrapper`);
        $seasons.addEventListener(`change`, handleChangeImage);

        const $form = document.querySelector(`.form-register`);
        $form.addEventListener(`submit`, handleSubmitRegistration);

    };

    init();
}
