var dreams = ['bogactwo', 'sława', 'młodość', 'piękno', 'zabawa'];
var disdreams = ['bieda', 'samotność', 'impotencja'];
const div = document.querySelector('div');
const add = document.querySelector('.add');
const input = document.querySelector('input');
const reset = document.querySelector('.reset');
const random = document.querySelector('.random');

// Pod dodawaniem życzeń znajduje się div, który je wyświetla 
div.textContent += dreams.join("; ")


//funkcja dodająca życzenia do listy- przycisk Dodaj
add.addEventListener('click', (e) => {
    div.textContent = '';
    e.preventDefault();

    if (!input.value.length) {
        input.value = "";
        div.textContent += dreams.join(" ;");
        return alert('Nie można dodać pustej wróżby');
    }
    if (dreams.length > 7) {
        input.value = "";
        div.textContent += dreams.join(" ;");
        return alert('Więcej życzeń Ci nie przysługuje!!!');
    }
    if (dreams.includes(input.value)) {
        input.value = "";
        div.textContent += dreams.join(" ;");
        return alert('To życzenie już istnieje');

    }
    dreams.push(input.value);
    input.value = "";
    div.textContent += dreams.join(" ;")

    //pętla remove ma za zadanie usuwać poprzednie życzenia z listy "Wybierz życzenie"- funkcja stworzona niżej
    remove();
    /*  //wywołujemy funkcje select, ponieważ pętla while usuneła zyczenia z listy, więc chcemy dodac aktualną listę- funkcja stworzona niżej */
    select();
})


//tworzymy funkcje która usuwa opcje z listty Wybierz zyczenie- funkcja bédzie uzywana wielokrotnie

function remove() {
    while (list.length > 1) {
        option.remove()
        list.length -= 1
    };
}

// przycisk reset usuwa dodane życzenia- "Zrezygnuj z życzeń"
reset.addEventListener('click', (e) => {
    e.preventDefault();
    dreams.length = 5;
    div.textContent = '';
    div.textContent += dreams.join(" ;")
})

// tworzymy div w którym będzie wyświetlane życzenie- lista życzen pod dodawaniem
const main = document.querySelector('main');
var div2 = document.createElement('div');
main.appendChild(div2);

///tworzymy funkcje, która wyświetla życzenie
let wishes = disdreams.concat(dreams);
random.addEventListener('click', (e) => {
    //div2.classList.add('circle')
    div2.textContent = "";
    let index = Math.floor(Math.random() * wishes.length)
    div2.textContent = wishes[index];

})


/* funkcja select dodaje posortowane życzenia do listy wybierz życzenie
option i choose muszą byc zmiennymi globalnymi, ponieważ odwołujemy się do nich w funkcji add, która dodaje życzenia do listy */
// do listy w option wpada tabela
var list = document.querySelector('select')
var option = 1;
function select() {
    wishes = disdreams.concat(dreams);
    for (i = 0; i < wishes.length; i++) {
        option = document.createElement('option');
        list.appendChild(option);
        wishes.sort();
        option.textContent = wishes[i]
    }
}
select();

//do zmiany zyczeń pobieramy input i button- by edytować życzenia z listy

const choose = document.querySelector('.choose');
let edit = document.querySelector('.edit');

edit.addEventListener('click', (e) => {
    e.preventDefault();
    if (!choose.value.length) {
        choose.value = "";
        return alert('Nie można usunąć życzenia');
    }
    //użytkownik nie może podmienić tego życzenia na już istniejące
    if (dreams.includes(choose.value)) {
        choose.value = "";
        return alert('To życzenie już istnieje');

    }
    // blokada by wybrac życzenie które musi zostac zmienione
    /* if (list.selectedIndex == 0) {
        choose.value = "";
        return alert('Musisz wybrać życzenie');
    }
 */
    // wyciągamy wartośc z listy życzeń którą chcemy usunąć i przypisujemy ją do zmeinnej bo będziemy później chcieli ją usunąc
    let value = list.options[list.selectedIndex].value

    /* filtrujemy życzenia tak by znależć wartość value i ją usuwamy wyrzucając z listy używając negacji ! tworząc tablicę bez tego elementu */

    let filteredDreams = dreams.filter((dream) => !dream.includes(value));
    dreams = filteredDreams;
    let filteredDisdreams = disdreams.filter((disdream) => !disdream.includes(value));
    disdreams = filteredDisdreams;
    /*   let filteredWishes = wishes.filter((wishe) => !wishe.includes(value));
      console.log(filteredWishes);
      wishes = filteredWishes;
      console.log(wishes); */
    wishes.push(choose.value);
    dreams.push(choose.value)
    //usuwamy opcje z listy "Wybierz życzenie"
    remove();
    // dodajemy życzenia do listy Wybierz życzenie
    select();
    choose.value = "";
    // chcemy auktualnić powyższą listę życzeń
    div.textContent = '';
    div.textContent += dreams.join(" ;");

})





/* uważaj czego sobie życzysz, możesz dodać maksymalnie trzy marzenia, wróżka Grazynka przepowie Ci przyszłość, ale nigdy nie możesz być pewnien czy bedzie świetlista, czy mrocznaą */