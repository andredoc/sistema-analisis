# AppSistemaAnálisisByChatGpt

Goal: Generate an angular app with "Independent components" using angular material library and ChatGpt.

## Run: `npm start`

## Final result

![Alt text](/src/assets/images/print-resultado-sistema-analisis.png)

### Prompts ChatGpt v-3.5

### Paso 1: Crear aplicación en angular con scaffolding

Como desarrollador front end, quiero crear una aplicación de angular con los siguientes requisitos: <br>

1.- Nombre de la aplicación : Sistema de Análisis <br>
2.- Que utilice CSS <br>
3.- Que utilice Angular material <br>
4.- Que utilice un scaffolding estructurado por componentes, servicios, interfaces, utiles y modelos <br>
5.- OPCIONAL En caso de utilizar JEST, configurar la aplicación para que utilice como test unitarios jest <br>

### Paso 2: Crear componente header

Como desarrollador front end quiero crear un componente de angular con los siguientes requisitos: <br>
1.- Nombre : header <br>
2.- Selector: header <br>
3.- Crearlo en la carpeta componentes <br>
4.- Que tenga fondo rojo <br>
5.- Que el color de los textos sean blancos <br>
6.- Que pueda recibir de forma opcional un input de tipo string, con la ruta de una imagen a mostrar y que se alinea en la parte izquierda del componente con el size 100x100 <br>
7.- Que reciba de forma obligatoria un input de tipo string con el título que se mostrará alineado al centro del componente <br>
8.- De ser posible utilizar angular material para implementar este componente <br>
9.- Implementa el test unitario para probar este componente con jasmine <br>

### Paso 3: Crear componente tabla

Como desarrolador de front end quiero crear un componente tabla con los siguientes requisitos: <br>
1.- Nombre: sistema-analisis-table <br>
2.- Quiero utilizar MatTableModule y la directiva mat-table de angular material <br>
3.- Quiero que los headers tengan fondo gris <br>
4.- Quiero que reciba como Input un array de objetos de tipo string. Cada string se pintará en un header de la tabla y que ese header se pinte alineado al centro de cada columna <br>
5.- Quiero mostrar un icono de "filtrar" al lado derecho de cada header. De preferencia utilizar la libreria "MatIconModule" de angular material para pintar el icono de filtro <br>
6.- Quiero que reciba como Input un array con los objetos que se pintaran en la tabla. Utilizando un ngFor quiero iterar por cada uno de los objetos del array y que se pinte en cada fila de la tabla <br>
7.- Cada objecto que se pintará en una fila tendrá las siguientes propiedades: aplicacion, fechaSolicitud, tipoPeticion, fuenteInformacion, modeloSolicitado, usuario, estado <br>
8.- Quiero que las filas tengna fondo blanco <br>
9.- Quiero que los datos de cada fila esten alineados al centro de cada columna <br>
 

### Paso 4: Crear componente "modal"

Como desarrolador de front end quiero crear un componente en angular para cargarlo en un Dialog de Angular material con los siguientes requisitos: <br>
1.- Nombre: solicitud-documentos-AEAT <br>
2.- Que el componente al ser cargado con MatDialog de angular material se divida en tres partes: mat-dialog-title, mat-dialog-content y mat-dialog-actions <br>
3.- El mat-dialog-title debe tener un MatIcon en la parte izquierda y un title de tipo string de color negro alineado en el centro del header <br>
4.- Debajo del mat-dialog-title quiero que pintes una linea de color verde que tendrá el mismo width del componente <br>
5.- El mat-dialog-content debe tener dos filas <br>
6.- En la primera fila se renderizará un campo mat-select que tendrá el label "tipo de modelo" alineado al lado izquierdo del campo. Este campo mat-select mostrará 3 opciones de tipo mat-option: "A","B","C". Este campo irá dentro de un mat-form-field <br>
7.-En la segunda fila se renderizará un campo de tipo mat-input y tendrá como label "Código CSV" alineado al lado izquierdo del campo. Este campo irá dentro de un mat-form-field <br>
8.- El mat-dialog-actions tendrá dos botones de angular material de tipo mat-button alineados al lado derecho. El label del primer button será "Aceptar" y debe ser color "Primary". El label del segundo mat-button será "Cancelar" y debe ser de color "Accent" <br>
9.- Al dar clic en el button "Aceptar" se enviará la data seleccionada del <mat-option> y del input number al componente que abre la modal <br> 
10.- Al hacer clic en el button "Cancelar" se ejecutará el método .close() de MatDialog para cerrar la modal <br>
11.- Quiero que el componente modal creado tenga estilos CSS para que sea vea profesional <br>

### Paso 5: Crear servicio

Como desarrollador de front end quiero crear un servicio en angular con los siguientes requisitos: <br>
1.- Nombre: documents <br>
2.- Dicho servicio quiero que se cree dentro de una carpeta llamada services <br>
3.- Utiliza el método get de HttpClient para obtener información de una URL proporcionada <br>

Prompt adicional: ... y cómo puedo manejar los errores en la respuesta del servidor utilizando los operadores catchError y throwError de RxJS? <br>


### Paso 6: Ordenar componente tabla

Como desarrolador font end quiero añadirle un icono de ordenado a esta tabla de angualr material: <br>
  <table mat-table [dataSource]="dataSource" class="gray-header"> <br>
    <ng-container *ngFor="let header of headers; let i = index" matColumnDef="{{header.columnKey}}"> <br>
      <th mat-header-cell *matHeaderCellDef mat-sort-header [style.text-align]="'center'"> <br>
        {{header.label}} <br>
        <mat-icon class="filter-icon">filter_list</mat-icon> <br>
      </th> <br>
      <td mat-cell *matCellDef="let element" [style.text-align]="'center'">{{element[header.columnKey]}}</td> <br>
    </ng-container> <br>

    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;" class="white-row"></tr>
  </table> <br>

### Comentarios:


A mi entender, ChatGpt responde mejor cuando: <br>
1.-Separo el requerimiento en componentes independientes y funcionales, los mismos que pueden ser reutilizables (header, table, button, modal, etc) <br>
2.-Ingreso el prompt como lista de tareas <br>
3.-Brindo mayor información técnica (ejemplo: "componente al ser cargado con MatDialog de angular material se divida en tres partes: mat-dialog-title, mat-dialog-content y mat-dialog-actions") <br>
4.-Se debe brindar un prompt claro y con instrucciones específicas . Esto puede requerir que el prompt sea más largo para dar claridad y contexto al output deseado. Utilizar prompts cortos y continuados tiende a hacer que el nuevo código reemplace partes del código anterior <br> 
5.-CUIDADO: Si no sabe la respuesta, ChatGpt en la mayoría de las veces brindará una respuesta incorrecta con confianza en lugar de decir que no sabe la respuesta <br>
