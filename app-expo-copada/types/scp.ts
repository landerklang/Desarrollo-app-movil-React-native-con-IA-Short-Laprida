// Interfaz para representar una entidad SCP
export interface SCPEntity {
  id: string;
  ItemNumber: string;
  Class: "Safe" | "Euclid" | "Keter" | "Thaumiel";
  ContainmentProcedures: string;
  Description: string;
}
