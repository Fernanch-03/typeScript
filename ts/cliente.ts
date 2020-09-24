namespace empresa{
    export class Cliente extends Pessoa{
        private _codCliente:number;
        private _credito:number;

        get codCliente():number{
            return this._codCliente;
        }

        set codCliente(codCliente:number){
            this._codCliente = codCliente;
        }
        get credito():number{
            return this._credito;
        }

        set credito(credito:number){
            this._credito = credito;
        }
        public comprar(valorProduto:number, desconto?:number){
            let result:string;

            if(typeof desconto === undefined){

                if(valorProduto <= this._credito){
                    result = "compra autorizada";
                }else{
                    result = "Compra negada";
                }
                return result;
            }else{
                if(valorProduto - desconto <= this._credito){
                    result = "compra autorizada";
                }else{
                    result = "Compra negada";
                }
                 return result;
                
            }
        } 
    }
}