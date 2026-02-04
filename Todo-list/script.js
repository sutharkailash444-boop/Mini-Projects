let input = document.querySelector('input');
let add = document.querySelector('#add');
let remove = document.querySelector('#remove');
let list_box = document.querySelector('.list_box');

add.addEventListener('click', function () {
    if (input.value === "") {
        window.alert("Empty Field");
    } else {
        let list = document.createElement('div');
        list.className = 'list';
        let h3 = document.createElement('h3');
        let icon = document.createElement('h2');
        icon.innerHTML = '<i class="ri-delete-bin-6-line"></i>';
        h3.innerHTML = input.value;
        list_box.appendChild(list);
        list.appendChild(h3);
        list.appendChild(icon);

        icon.addEventListener('click', function () {
            list.remove();
        })

        remove.addEventListener('click', function () {
            list.remove();
        })
    }
    input.value = '';
})

document.body.addEventListener('keydown', function (val) {
    if (val.key === 'Enter') {
        if (input.value === "") {
            window.alert("Empty Field");
        } else {
            let list = document.createElement('div');
            list.className = 'list';
            let h3 = document.createElement('h3');
            let icon = document.createElement('h2');
            icon.innerHTML = '<i class="ri-delete-bin-6-line"></i>';
            h3.innerHTML = input.value;
            list_box.appendChild(list);
            list.appendChild(h3);
            list.appendChild(icon);
            input.value = '';
        }
    }

})