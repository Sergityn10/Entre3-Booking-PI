import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import accommodationService from "../../Controllers/accommodationService";

export function HabitacionesUsuario() {
  const { userId } = useParams(); 
  const [numHabitaciones, setNumHabitaciones] = useState(null);
  const [error, setError] = useState(null); 

  useEffect(() => {
    if (userId) {
      const fetchNumHabitaciones = async () => {
        try {
          const num = await accommodationService.getNumAccommodationsByIdu(userId);
          setNumHabitaciones(num);
        } catch (error) {
          setError(error);
        }
      };

      fetchNumHabitaciones();
    }
  }, [userId]);

  return (
    <>
        {error ? (
            <p>Error al cargar el número de habitaciones: {error.message}</p>
        ) : numHabitaciones !== null ? (
            <p style={{ color: numHabitaciones > 3 ? 'red' : 'black' }}>
                Habitaciones del usuario: {numHabitaciones}
            </p>
        ) : (
            <p>{userId ? "Cargando..." : "Por favor, ingrese un ID de usuario."}</p>
        )}
    </>
  );
}
