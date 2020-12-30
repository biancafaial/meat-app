class Order {
    constructor(
        public adderss: string,
        public number: number,
        public optionalAddress: string,
        public paymentOption: string,
        public orderItems: OrderItem[]=[]
    ){}

}
class OrderItem{
    constructor(public quantity: number, public meniId: string){}
}

export{
    Order,
    OrderItem
}