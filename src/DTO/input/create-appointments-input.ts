import { Field, InputType } from "type-graphql";

@InputType()
export class createAppointmentsInput{

    @Field()
    customerId: number;

    @Field()
    startAt: Date;

    @Field()
    endAt: Date;
}