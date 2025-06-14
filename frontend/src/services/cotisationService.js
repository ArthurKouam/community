import api from "./api";

// Service pour gérer les appels API liés aux cotisations
const cotisationService = {
  // Récupérer toutes les cotisations
  getAllCotisations: async () => {
    const response = await api.get("/cotisation");
    return response.data;
  },

  // Récupérer les cotisations d'un membre spécifique
  getCotisationsByMembre: async (membreId) => {
    const response = await api.get(`/cotisation/membre/${membreId}`);
    return response.data;
  },

  // Récupérer les cotisations par mois et année
  getCotisationsByPeriode: async (mois, annee) => {
    const response = await api.get(`/cotisation/periode/${mois}/${annee}`);
    return response.data;
  },

  // Récupérer une cotisation spécifique
  getCotisationById: async (id) => {
    const response = await api.get(`/cotisation/${id}`);
    return response.data;
  },

  // Créer une nouvelle cotisation
  createCotisation: async (cotisationData) => {
    const response = await api.post("/cotisation", cotisationData);
    return response.data;
  },

  // Mettre à jour une cotisation
  updateCotisation: async (id, cotisationData) => {
    const response = await api.put(`/cotisation/${id}`, cotisationData);
    return response.data;
  },

  // Mettre à jour le statut d'une cotisation
  updateCotisationStatus: async (id, statut) => {
    const response = await api.patch(`/cotisation/${id}/status`, {
      statut,
    });
    return response.data;
  },

  // Supprimer une cotisation
  deleteCotisation: async (id) => {
    const response = await api.delete(`/cotisation/${id}`);
    return response.data;
  },

  // Générer un rapport de cotisations
  generateReport: async (filters) => {
    const response = await api.post("/cotisation/report", filters);
    return response.data;
  },
};

export default cotisationService;
