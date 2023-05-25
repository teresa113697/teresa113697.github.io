AFRAME.registerComponent('button', {
    init: function() {
        var marker = document.querySelector('a-marker');
        const btn = document.getElementById('myButton');
        btn.addEventListener('click', function(evt) {
            testEntity = document.createElement('a-entity');
            removeEntity = document.querySelector('#AItext');

            marker.removeChild(removeEntity);

            console.log("click");
            marker.appendChild(testEntity);

            testEntity.setAttribute( 'material', 'color', 'black');
            testEntity.setAttribute( 'text', 'value', 'Tekst na button click');
            testEntity.setAttribute( 'rotation', '-90 0 0');
            testEntity.setAttribute( 'position', '0 0 -0.3');
            testEntity.setAttribute( 'id', '#AItext');

        })
    }

})
