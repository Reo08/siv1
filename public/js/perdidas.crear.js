
document.addEventListener('DOMContentLoaded', e=> {
    const $selectCategoria = document.querySelector(".select_categoria");
    const $selectProducto = document.querySelector(".select_producto");
    const $inputPrecioPerdida = document.querySelector(".precio_compra");
    const $inputCantidadPerdida = document.querySelector(".cantidad_perdida");
    const $frag = document.createDocumentFragment();
    const $frag2 = document.createDocumentFragment();

    $selectCategoria.addEventListener("change", e=> {
        let valorSelectCategoria = e.target.value;
        if(valorSelectCategoria){
            $selectProducto.innerHTML = '<option value="">Seleccione un producto</option>';
            fetch(`/productos-categoria-perdidas/${valorSelectCategoria}`)
            .then(response => response.ok? response.json(): Promise.reject(response))
            .then(dato => {
                let $array = Array.from(dato);
                $array.forEach(el => {
                    let $option = document.createElement("option");
                    $option.value = el.id_producto;
                    $option.innerHTML = el.nombre_producto;
                    $frag.appendChild($option);
                })
                // $selectProducto.innerHTML = $frag.innerHTML;
                $selectProducto.appendChild($frag);
            })
            .catch(error => console.log(error));
        }else {
            $selectProducto.innerHTML = '<option value="">Seleccione un producto</option>';
        }

    })

    $selectProducto.addEventListener("change", e=> {
        let valorSelectProducto = e.target.value;
        if(valorSelectProducto){
            fetch(`/proveedores-select-perdidas/${e.target.value}`)
            .then(response => response.ok? response.json(): Promise.reject(response))
            .then(dato => {
                $inputPrecioPerdida.value = dato[0];
                $inputCantidadPerdida.value = dato[1];
                //$selectProducto.innerHTML = $frag.innerHTML;
            })
            .catch(error => console.log(error));
        }
    }) 
});