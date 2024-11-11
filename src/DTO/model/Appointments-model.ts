import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class AppointmentsModel{

    @Field()
    startAt: Date;

    @Field()
    endAt: Date;
}