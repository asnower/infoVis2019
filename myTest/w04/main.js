function main()
{
    var width = 1000;
    var height = 1000;

    var scene = new THREE.Scene();

    var light = new THREE.PointLight(0xffffff);
    light.position.set(1,1,1);
    scene.add(light);

    var light2 = new THREE.PointLight(0xffffff,0.3);
    light2.position.set(-1,-1,-1);
    scene.add(light2);

    var directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
    directionalLight.position.set(THREE.Object3D.DefaultDown);
    //scene.add(directionalLight);

    var fov = 45;
    var aspect = width / height;
    var near = 1;
    var far = 1000;
    var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
    camera.position.set( 0, 0, 5 );
    scene.add( camera );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    document.body.appendChild( renderer.domElement );

    var geometry = new THREE.BoxGeometry( 10, 10, 10 );
    var material = new THREE.MeshLambertMaterial({color: 0x111111});
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    loop();

    function loop()
    {
        requestAnimationFrame( loop );
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render( scene, camera );
    }
}