namespace empresa{
    export class ClienteVip extends Cliente implements IEndereco{
        private _bonus:number = 0;

        public mostraEndereco():string{
            return "Rua Nova 222 Sp";
        }

        get bonus(){
            return this._bonus;
        }

        set bonus(bonus:number){
            this._bonus = bonus;
        }
        public comprar(valorProduto:number, desconto?:number){
            let result:string;

            if(typeof desconto === undefined){

                if(valorProduto <= this.credito + this._bonus){
                    result = "compra autorizada";
                }else{
                    result = "Compra negada";
                }
                return result;
            }else{
                if(valorProduto - desconto <= this.credito + this._bonus){
                    result = "compra autorizada";
                }else{
                    result = "Compra negada";
                }
                 return result;
                
            }
        } 
    }
}