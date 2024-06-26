@extends('plantilla.plantilla')

@section('titulo', 'Proveedores')
@section('links')
    <link rel="stylesheet" href="/css/proveedoresCrear.css">
@endsection

@section('contenido')
    <section class="sec-crear-proveedor">
        <a href="{{route('proveedores.index')}}" class="btn-atras">Atras</a>
        <div class="cont-form">
            <form class="form_proveedor" action="{{route('proveedores.store')}}" method="POST">
                @csrf
                <legend>Agregar Proveedor</legend>
                <label for="nit_proveedor">Nit</label>
                <input type="number" name="nit_proveedor" id="nit_proveedor" value="{{old('nit_proveedor')}}">
                @error('nit_proveedor')
                    <small>*{{$message}}</small>
                @enderror
                <label for="nombre_proveedor">Nombre proveedor</label>
                <input type="text" name="nombre_proveedor" id="nombre_proveedor"  value="{{old('nombre_proveedor')}}">
                @error('nombre_proveedor')
                    <small>*{{$message}}</small>
                @enderror
                <label for="correo_proveedor">Correo electronico</label>
                <input type="email" name="correo_proveedor" id="correo_proveedor"  value="{{old('correo_proveedor')}}">
                @error('correo_proveedor')
                    <small>*{{$message}}</small>
                @enderror
                <label for="telefono_proveedor">Telefono</label>
                <input type="number" name="telefono_proveedor" id="telefono_proveedor"  value="{{old('telefono_proveedor')}}">
                @error('telefono_proveedor')
                    <small>*{{$message}}</small>
                @enderror
                <div class="cont-btns">
                    <button>Guardar</button>
                    <a href="{{route('proveedores.index')}}">Cancelar</a>
                </div>
            </form>
        </div>
    </section>
@endsection

@section('scripts')
    
@endsection