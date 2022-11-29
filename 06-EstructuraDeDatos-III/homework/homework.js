'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.left = null;
   this.right = null;
   this._length = 0;
}

BinarySearchTree.prototype.insert = function (value){
   if (value < this.value){
      if (this.left) {
         this.left.insert(value);
      } else {
         this.left = new BinarySearchTree(value);
      }
   } else if (value >= this.value){
      if (this.right) {
         this.right.insert(value);
      } else {
         this.right = new BinarySearchTree(value);
      }
   }
}
BinarySearchTree.prototype.size = function (){
   if (!this.left && !this.right){
      return 1;
   }

   if (!this.left) return 1 + this.right.size();
   if (!this.right) return 1 + this.left.size();
   if (this.right && this.left) return 1 + this.left.size() + this.right.size();
}


BinarySearchTree.prototype.contains = function (value){
   if (this.value === value) {
      return true;
   }

   if (this.left !== null && this.left.contains(value)) return true;
   if (this.right !== null && this.right.contains(value)) return true;

   return false;
}

BinarySearchTree.prototype.depthFirstForEach = function (cb, str){
   var miArr = [];

   switch(str) {
      case "pre-order":
         cb(this.value);
         if (this.left !== null) {
            this.left.depthFirstForEach(cb, str);  //Recorriendo in order, VLR
         }
         if (this.right !== null) {
            this.right.depthFirstForEach(cb,str);
         }
         break;

      case "post-order":
         if (this.left !== null) {
            this.left.depthFirstForEach(cb, str);  //Recorriendo post order, LRV
         }
         if (this.right !== null) {
            this.right.depthFirstForEach(cb,str);
         }
         cb(this.value);

         break;

      default:
         if (this.left !== null) {
            this.left.depthFirstForEach(cb, str);  //Recorriendo in order, LVR
         }
         cb(this.value);
         if (this.right !== null) {
            this.right.depthFirstForEach(cb,str);
         }
         break;
   }
}

BinarySearchTree.prototype.breadthFirstForEach = function (){}
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
