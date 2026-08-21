import { SCPEntity } from "../types/scp";
import { initialScps } from "../constants/scpData";

// Array en memoria que almacena los SCPs durante el ciclo de vida de la aplicación.
// Se inicializa con los datos de prueba de scpData.ts.
let scps: SCPEntity[] = [...initialScps];

/**
 * Función auxiliar para simular la latencia de red.
 * Retorna una promesa que se resuelve después de 500ms.
 */
const simulateLatency = (): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, 500));

/**
 * Obtiene todas las entidades SCP de la base de datos en memoria.
 * @returns Una copia del array de SCPs actual.
 */
export async function getAllSCPs(): Promise<SCPEntity[]> {
  await simulateLatency();
  return [...scps];
}

/**
 * Busca y retorna un SCP por su identificador único.
 * Si no se encuentra, devuelve undefined en lugar de lanzar una excepción.
 * @param id El ID único de la anomalía SCP a buscar.
 * @returns El SCP encontrado o undefined si no existe.
 */
export async function getSCPById(id: string): Promise<SCPEntity | undefined> {
  await simulateLatency();
  return scps.find((scp) => scp.id === id);
}

/**
 * Registra una nueva anomalía SCP en la base de datos en memoria.
 * Genera un identificador único basado en el número de ítem de forma segura.
 * @param scp Los datos de la anomalía SCP sin el identificador.
 * @returns El nuevo objeto SCP creado con su respectivo ID.
 */
export async function createSCP(
  scp: Omit<SCPEntity, "id">,
): Promise<SCPEntity> {
  await simulateLatency();

  // Generar ID único usando el ItemNumber normalizado o la marca de tiempo actual si está vacío.
  const suffix =
    scp.ItemNumber.toLowerCase().replace(/[^a-z0-9]/g, "-") ||
    Date.now().toString();
  const id = `scp-${suffix}`;

  const newScp: SCPEntity = {
    ...scp,
    id,
  };

  scps.push(newScp);
  return newScp;
}

/**
 * Actualiza la información de un SCP existente mediante su ID.
 * Utiliza spread para combinar los campos existentes y los nuevos.
 * Lanza un error si la anomalía no existe en memoria.
 * @param id El ID del SCP que se desea actualizar.
 * @param scp Los campos parciales a modificar.
 * @returns El objeto SCP actualizado.
 */
export async function updateSCP(
  id: string,
  scp: Partial<SCPEntity>,
): Promise<SCPEntity> {
  await simulateLatency();

  const index = scps.findIndex((item) => item.id === id);
  if (index === -1) {
    throw new Error("SCP no encontrado");
  }

  // Mezclar los datos anteriores con las actualizaciones, manteniendo el ID original inalterado.
  const updatedScp: SCPEntity = {
    ...scps[index],
    ...scp,
    id,
  };

  scps[index] = updatedScp;
  return updatedScp;
}

/**
 * Elimina un registro de SCP de la base de datos en memoria.
 * Filtra el array excluyendo el ID especificado.
 * Lanza un error si la anomalía no existe en memoria.
 * @param id El ID de la anomalía SCP a eliminar.
 */
export async function deleteSCP(id: string): Promise<void> {
  await simulateLatency();

  const index = scps.findIndex((item) => item.id === id);
  if (index === -1) {
    throw new Error("SCP no encontrado");
  }

  scps = scps.filter((item) => item.id !== id);
}
