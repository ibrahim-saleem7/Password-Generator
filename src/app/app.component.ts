import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {


  uppercase : string =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  lowercase: string =  "abcdefghijklmnopqrstuvwxyz"
  numbers: string =  "0123456789"
  symbols:  string = "^!$%&|[](){}:;.,*+-#@<>~"
  copyAll : string = "copy_all"

  isUppercase : boolean = false
  isNumbers : boolean = false
  isSymbols : boolean = false
  isUnique : boolean = false
  isStrong : boolean = false
  isMedium : boolean = false

  passLength  : number = 8
  result : any = ""


  ngOnInit() {
    this.generate()
  }

  Uppercase(){
    this.isUppercase = !this.isUppercase;
  }
  Numbers(){
    this.isNumbers = !this.isNumbers;
  }
  Symbols(){
    this.isSymbols= !this.isSymbols;
  }
  Unique(){
    this.isUnique = !this.isUnique;
  }
  copy(){
    navigator.clipboard.writeText(this.result)
    this.copyAll = "check"
    setTimeout(() => this.copyAll = "copy_all",2000)
  }



  generate(){
    this.result = ""
    for (let i = 0; i < this.passLength; i++){
      this.result+= this.lowercase.charAt(Math.trunc(Math.random() * this.lowercase.length));
      if(this.isUppercase){
        this.result+= this.uppercase.charAt(Math.trunc(Math.random() * this.uppercase.length));
      }
      if(this.isNumbers){
        this.result+= this.numbers.charAt(Math.trunc(Math.random() * this.numbers.length));
      }
      if(this.isSymbols){
        this.result+= this.symbols.charAt(Math.trunc(Math.random() * this.symbols.length));
      }
    }
    if(this.isUnique){
      this.result = new Set (this.result)
      this.result = Array.from(this.result).join('')
    }
    this.result = this.result.substring(0,this.passLength)
    this.isMedium = this.isUppercase && (this.isNumbers || this.isSymbols) || (this.isNumbers && this.isSymbols)
    this.isStrong = this.isUppercase && this.isNumbers && this.isSymbols
  }



  title = 'Password-Generator';
}
