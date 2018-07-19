document.addEventListener('DOMContentLoaded', function(e) {
  let pokemonList = [
    'Tirtouga',
    'Houndour',
    'Ursaring',
    'Spinda',
    'Banette Mega',
    'Accelgor',
    'Cyndaquil',
    'Rhyperior',
    'Samurott',
    'Cleffa',
    'Tentacool',
    'Pichu'
  ];

  const loadButtons = (pokemonList, container) => {
    // clear container before we create any ui elements
    const parent = document.getElementById(container);
    parent.innerHTML = '';

    pokemonList.forEach(pokemon => {
      button = document.createElement('button');
      button.setAttribute('type', 'button');
      button.classList.add('btn', 'btn-dark');
      button.innerHTML = pokemon;
      button.setAttribute('data-type', pokemon);
      parent.append(button);
    });
  };

  const getGhiphy = e => {
    e.preventDefault();
    let pokemon = e.target.textContent;
    parent = document.getElementById('gifContainer');
    parent.innerHTML = ''; // clear the container first
    let output = '';

    if (pokemonList.includes(pokemon)) {
      let url = `http://api.giphy.com/v1/gifs/search?q=${pokemon}&api_key=Fqls5JhCEWL5A6ObgtJ2OdM14WHCH2f7&limit=20`;
      fetch(`${url}`)
        .then(response => response.json())
        .then(data => {
          data.data.forEach(item => {
            console.log(item);
            output = `<div class="card" style="width: 18rem;">
              <img class="card-img-top" src="${
                item.images.fixed_height.url
              }?text=Image cap" alt="Card image cap">
              <div class="card-body">
                <p class="card-text">This little pokemon is rated ${
                  item.rating
                }</p>
              </div>
            </div>`;

            parent.innerHTML += output;
          });
        })
        .catch(error => console.log(error));
    }
  };
  console.log(pokemonList);
  loadButtons(pokemonList, 'buttons');
  document.getElementById('buttons').addEventListener('click', getGhiphy);
});
