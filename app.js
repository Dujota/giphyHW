document.addEventListener('DOMContentLoaded', function(e) {
  let pokemonList = [
    'Tirtouga',
    'Houndour',
    'Ursaring',
    'Spinda',
    'Banette Mega',
    'Accelgor'
  ];

  const loadButtons = (pokemonList, container) => {
    // clear container before we create any ui elements
    parent = document.getElementById(container);
    parent.innerHTML = '';

    pokemonList.forEach(pokemon => {
      button = document.createElement('button');
      button.classList.add('btn', 'btn-primary');
      button.innerHTML = pokemon;
      button.setAttribute('data-type', pokemon);
      parent.append(button);
    });
  };

  const getGhiphy = e => {
    pokemon = e.target.textContent;
    url = `http://api.giphy.com/v1/gifs/search?q=${pokemon}&api_key=Fqls5JhCEWL5A6ObgtJ2OdM14WHCH2f7&limit=5`;
    fetch(`${url}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => console.log(error));
  };

  loadButtons(pokemonList, 'buttons');
  document.getElementById('buttons').addEventListener('click', getGhiphy);
});
