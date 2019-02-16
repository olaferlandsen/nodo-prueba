(() => {
    'use strict';

    if (!String.prototype.includes) {
        String.prototype.includes = function(search, start) {
            'use strict';
            if (typeof start !== 'number') {
                start = 0;
            }

            if (start + search.length > this.length) {
                return false;
            } else {
                return this.indexOf(search, start) !== -1;
            }
        };
    }

    function request (uri, success, error = null) {
        let httpRequest = new XMLHttpRequest();
        httpRequest.open('GET', uri);
        httpRequest.send();
        httpRequest.onreadystatechange = () => {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {
                    success.apply(null, [httpRequest.responseText, httpRequest.status])
                } else {
                    if (typeof error === 'function') {
                        error.apply(null, [httpRequest.responseText, httpRequest.status])
                    }
                }
            }
        }
    }
    function stringToDOM (value) {
        let div = document.createElement('div');
        let dom = new DOMParser()
            .parseFromString(value, 'text/html')
            .documentElement
            .querySelector('body')
            .childNodes;
        dom.forEach(function (child) {
            div.appendChild(child);
        });
        return div;

    }
    function modal (node) {
        let modal = document.querySelector('#modal');
        let overlay = document.querySelector('#modal');

        let remove = function () {
            if (modal) {
                modal.parentNode.removeChild(modal);
            }
            if (overlay) {
                overlay.parentNode.removeChild(overlay);
            }
        };

        remove();

        modal = document.createElement('div');
        modal.id = 'modal';
        overlay = document.createElement('div');
        overlay.id = 'overlay';
        modal.appendChild(node);
        overlay.onclick = function () {
            remove();
        };

        document.querySelector('body').appendChild(overlay);
        document.querySelector('body').appendChild(modal);
    }
    request('./list.html', function (response) {
        let listNode = stringToDOM(response);
        let container = document.querySelector('.container');
        request('https://api.got.show/api/characters', function (response) {
            let list = JSON.parse(response);
            list.map(function (character) {
                let li = document.createElement('li');
                let h1 = document.createElement('h1');
                let h2 = document.createElement('h2');
                li.onclick = function() {
                    view (character._id)
                };
                h1.textContent = character.name;
                h2.textContent = character.house;
                li.appendChild(h1);
                li.appendChild(h2);
                listNode.querySelector('ul').appendChild(li);
            });
            listNode.querySelector('#search').onkeyup = function () {
                search(this.value)
            };
        });
        container.appendChild(listNode);

    });
    function search (text) {
        document.querySelectorAll('.list ul li').forEach((item) => {
            if (!item.textContent.replace(/([A-Z])+/g, ' $1').replace(/\s+/g, ' ').toLowerCase().includes(text.toLowerCase())) {
                item.classList.add('hide')
            } else {
                item.classList.remove('hide')
            }
        })
    }
    function view (id) {
        request('./character.html',  template => {
            const templateNode = stringToDOM(template);
            request('https://api.got.show/api/characters/byId/'+ id, response => {
                const character = JSON.parse(response).data;
                templateNode.querySelector('#name').textContent = character.name;
                templateNode.querySelector('#house').textContent = character.house;
                templateNode.querySelector('#slug').textContent = character.slug;
                templateNode.querySelector('#pageRank').textContent = character.pageRank;


                const books = templateNode.querySelector('#books');
                for (let book of character.books) {
                    let li = document.createElement('li');
                    li.textContent = book;
                    books.appendChild(li);
                }

                const titles = templateNode.querySelector('#titles');
                for (let title of character.titles) {
                    let li = document.createElement('li');
                    li.textContent = title;
                    titles.appendChild(li);
                }
                modal(templateNode);
            });
        })
    }
})();