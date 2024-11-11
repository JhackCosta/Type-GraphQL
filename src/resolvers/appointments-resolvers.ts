import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { createAppointmentsInput } from "../DTO/input/create-appointments-input";
import { AppointmentsModel } from "../DTO/model/Appointments-model";
import { CustomerModel } from "../DTO/model/Customer-Model";

@Resolver(()=>AppointmentsModel)
export class AppointmentsResolver {
    
    @Query(() => [AppointmentsModel])
    async appointments() {
        return [
            {
                startAt: new Date(),
                endAt: new Date()
            }
        ];
    }

    @Mutation(() => AppointmentsModel!)
    async createAppointments(@Arg("data") data: createAppointmentsInput) {

        const appointments = {
            startAt: data.startAt,
            endAt: data.endAt
        }
        return appointments;
    }

    @FieldResolver(()=> CustomerModel)
    async customer(@Root() appointment: AppointmentsModel) {
        console.log(appointment);
        return {
            name: "jhack costa"
        }
    }
}