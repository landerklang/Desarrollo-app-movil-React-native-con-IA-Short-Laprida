import React, { createContext, useContext, useState, ReactNode } from 'react';

export type ScpClass = 'Safe' | 'Euclid' | 'Keter' | 'Thaumiel';

export interface ScpAnomaly {
  id: string;
  itemNumber: string; // e.g., "SCP-173"
  class: ScpClass;
  containmentProcedures: string;
  description: string;
}

interface ScpContextType {
  scps: ScpAnomaly[];
  addScp: (scp: Omit<ScpAnomaly, 'id'>) => void;
  updateScp: (id: string, scp: Partial<ScpAnomaly>) => void;
  getScp: (id: string) => ScpAnomaly | undefined;
}

const ScpContext = createContext<ScpContextType | undefined>(undefined);

const initialScps: ScpAnomaly[] = [
  {
    id: 'scp-173',
    itemNumber: 'SCP-173',
    class: 'Euclid',
    containmentProcedures: 'El elemento SCP-173 debe mantenerse en una cámara cerrada en todo momento. Cuando el personal deba entrar a la cámara de SCP-173, no menos de tres personas pueden entrar a la vez y la puerta debe cerrarse tras ellos. Dos personas deben mantener contacto visual directo con SCP-173 en todo momento hasta que todo el personal haya salido y vuelto a cerrar la cámara.',
    description: 'Trasladado al Sitio-19 en 1993. Su origen es aún desconocido. Está construido de hormigón y barras de refuerzo con restos de pintura de aerosol de marca Krylon. SCP-173 es extremadamente hostil y animado. El objeto no puede moverse mientras esté dentro del campo visual directo de alguien. No se debe romper el contacto visual bajo ninguna circunstancia con SCP-173. El personal asignado a entrar en el recinto tiene instrucciones de dar aviso antes de parpadear.',
  },
  {
    id: 'scp-096',
    itemNumber: 'SCP-096',
    class: 'Euclid',
    containmentProcedures: 'SCP-096 debe mantenerse en su celda, un cubo de acero hermético de 5 m x 5 m x 5 m, en todo momento. Se realizarán patrullas semanales para detectar cualquier grieta o agujero. No se permite bajo ninguna circunstancia el uso de cámaras de video o herramientas de observación óptica de ningún tipo dentro de la celda de SCP-096. Los sensores de presión y detectores láser se utilizarán para asegurar su presencia.',
    description: 'SCP-096 es una criatura humanoide que mide aproximadamente 2.38 metros de altura. Muestra muy poca masa muscular, y los análisis preliminares sugieren una desnutrición leve. Los brazos están extremadamente desproporcionados con respecto al resto del cuerpo, con una longitud aproximada de 1.5 metros cada uno. La piel carece en su mayoría de pigmentación, y no muestra indicios de vello corporal. SCP-096 es normalmente dócil, pero cuando alguien visualiza su rostro (directamente, en video, o en fotos), entra en un estado de estrés emocional extremo y perseguirá a esa persona para eliminarla sin importar dónde esté.',
  },
  {
    id: 'scp-682',
    itemNumber: 'SCP-682',
    class: 'Keter',
    containmentProcedures: 'SCP-682 debe ser destruido tan pronto como sea posible. Actualmente, los equipos SCP no son capaces de destruir a SCP-682, solo de causarle daños físicos masivos. SCP-682 debe mantenerse en una cámara de 5 m x 5 m x 5 m recubierta con placas de acero resistentes al ácido. La cámara de contención debe llenarse con ácido clorhídrico concentrado para mantener a SCP-682 sumergido e incapacitado.',
    description: 'SCP-682 es una criatura grande, vagamente parecida a un reptil, de origen desconocido. Parece ser extremadamente inteligente, y ha sido observado comunicándose en un lenguaje complejo durante sus limitados periodos de contención. SCP-682 posee una fuerza, velocidad y reflejos sobrehumanos, además de una capacidad de regeneración y adaptación extremadamente rápida que le permite sobrevivir a cualquier intento de terminación o daño físico.',
  },
  {
    id: 'scp-999',
    itemNumber: 'SCP-999',
    class: 'Safe',
    containmentProcedures: 'SCP-999 tiene permitido deambular libremente por las instalaciones si así lo desea, pero de lo contrario debe permanecer en su corral asignado. No se permite que SCP-999 salga de las instalaciones a menos que esté acompañado por personal de seguridad autorizado. El elemento debe mantenerse limpio y alimentado con caramelos y golosinas.',
    description: 'SCP-999 es una masa gelatinosa, grande, amorfa y viscosa de color naranja translúcido, que pesa aproximadamente 54 kg con una consistencia similar a la de la mantequilla de cacahuete. El temperamento del sujeto se describe como lúdico y amigable, similar al de un perro. El contacto con la superficie de SCP-999 provoca una sensación inmediata de euforia y felicidad, que aumenta cuanto más tiempo se pase con él. Produce un olor sumamente agradable que cambia según la persona.',
  }
];

export function ScpProvider({ children }: { children: ReactNode }) {
  const [scps, setScps] = useState<ScpAnomaly[]>(initialScps);

  const addScp = (scp: Omit<ScpAnomaly, 'id'>) => {
    const newId = `scp-${scp.itemNumber.toLowerCase().replace(/[^a-z0-9]/g, '-') || Date.now().toString()}`;
    const newAnomaly: ScpAnomaly = {
      ...scp,
      id: newId,
    };
    setScps((prev: ScpAnomaly[]) => [newAnomaly, ...prev]);
  };

  const updateScp = (id: string, updatedFields: Partial<ScpAnomaly>) => {
    setScps((prev: ScpAnomaly[]) =>
      prev.map((scp: ScpAnomaly) => (scp.id === id ? { ...scp, ...updatedFields } : scp))
    );
  };

  const getScp = (id: string) => {
    return scps.find((scp: ScpAnomaly) => scp.id === id);
  };

  return (
    <ScpContext.Provider value={{ scps, addScp, updateScp, getScp }}>
      {children}
    </ScpContext.Provider>
  );
}

export function useScps() {
  const context = useContext(ScpContext);
  if (!context) {
    throw new Error('useScps must be used within an ScpProvider');
  }
  return context;
}
