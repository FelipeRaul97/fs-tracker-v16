// FORESCORE TRACKER — Datos
// Editar este archivo para agregar/actualizar apuestas.
// Estado: PENDIENTE | GANADA | PERDIDA | VOID
const TRACKER_DATA = [
  {
    "id": "001",
    "fecha": "2026-09-13",
    "jornada": 5,
    "liga": "SP1",
    "partido": "Sevilla vs Valencia",
    "lambda_forma_l": 1.4837,
    "lambda_forma_v": 0.933,
    "lambda_reg_l": 1.1851,
    "lambda_reg_v": 0.9993,
    "lambda_base_l": 1.2747,
    "lambda_base_v": 0.9794,
    "lambda_final_l": 1.3042,
    "lambda_final_v": 0.9499,
    "lambda_shadow_l": 1.227,
    "lambda_shadow_v": 0.8122,
    "lambda_corners": 8.286,
    "ratio": 1.3729866301715972,
    "visit_dominante": "False",
    "variables_activas": "V#2(V:0.95) - V#3(L:0.98) - V#4(L:0.96) - V#4(V:0.90)",
    "variables": {
      "v1": {
        "factor_local": 1.0,
        "factor_visit": 1.0,
        "activa": false,
        "activa_local": false,
        "activa_visit": false,
        "detalle_local": "--",
        "detalle_visit": "--",
        "detalle": "Ambos necesitan >=20 PJ (local:4, visit:4)"
      },
      "v2": {
        "factor_local": 1.0,
        "factor_visit": 0.95,
        "activa_local": false,
        "activa_visit": true,
        "detalle_local": "Rank 7, margen 5pts -- fuera de riesgo",
        "detalle_visit": "Rank 20, margen -1pts sobre zona desc"
      },
      "v3": {
        "factor_local": 0.98,
        "activa": true,
        "n_partidos": 20,
        "GpG_casa": 1.3,
        "GpG_liga": 1.5,
        "hs": -0.2,
        "muestra_completa": true,
        "detalle": "hs=-0.20 (20 ptdos)"
      },
      "v4": {
        "factor_local": 0.96,
        "factor_visit": 0.9,
        "activa_local": true,
        "activa_visit": true,
        "bajas_local": 2,
        "bajas_visit": 8
      },
      "v5": {
        "factor_local": 1.0,
        "factor_visit": 1.0,
        "activa_local": false,
        "activa_visit": false
      },
      "v6": {
        "factor_local": 1.0,
        "factor_visit": 1.0,
        "activa": false
      },
      "v7": {
        "skip": false,
        "activa_local": false,
        "activa_visit": false,
        "detalle": "Sin DT nuevo"
      },
      "v8": {
        "activa": false,
        "anulado_derby": false,
        "detalle": "Inactiva"
      }
    },
    "confianza": "ALTA",
    "notas": "",
    "resultado_partido": null,
    "goles_esperados": "2.25",
    "apuestas": [
      {
        "tipo": "PICK",
        "mercado": "over15",
        "linea": null,
        "etiqueta": "Over 1.5",
        "cuota": 1.45,
        "prob": 70.1,
        "ev_pct": 1.6,
        "estado": "PENDIENTE",
        "pl": null
      }
    ],
    "watchlist": [
      {
        "mercado": "empate",
        "linea": null,
        "etiqueta": "Empate",
        "cuota": 3.25,
        "prob": 31.5,
        "ev_pct": 2.4,
        "regla_1x2_no_pick": true
      },
      {
        "mercado": "do1x",
        "linea": null,
        "etiqueta": "DO Sevilla o Empate",
        "cuota": 1.28,
        "prob": 74.8,
        "ev_pct": -4.3,
        "cuota_justa": 1.42,
        "cuota_segura": 1.57,
        "acierto_hist": 70.6,
        "n_hist": 194
      },
      {
        "mercado": "over25",
        "linea": null,
        "etiqueta": "Over 2.5",
        "cuota": 2.32,
        "prob": 41.7,
        "ev_pct": -3.3
      },
      {
        "mercado": "under35",
        "linea": null,
        "etiqueta": "Under 3.5",
        "cuota": 1.23,
        "prob": 80.9,
        "ev_pct": -0.5
      },
      {
        "mercado": "under45",
        "linea": null,
        "etiqueta": "Under 4.5",
        "cuota": 1.08,
        "prob": 92.2,
        "ev_pct": -0.4
      },
      {
        "mercado": "btts",
        "linea": null,
        "etiqueta": "BTTS",
        "cuota": 2.0,
        "prob": 51.3,
        "ev_pct": 2.6,
        "filtro_edge": "dPlatt=6.6pp"
      },
      {
        "mercado": "over05_local",
        "linea": null,
        "etiqueta": "Over 0.5 Sevilla",
        "cuota": 1.29,
        "prob": 74.6,
        "ev_pct": -3.8,
        "cuota_justa": 1.38,
        "cuota_segura": 1.51,
        "acierto_hist": 72.3,
        "n_hist": 238
      },
      {
        "mercado": "over05_visit",
        "linea": null,
        "etiqueta": "Over 0.5 Valencia",
        "cuota": 1.57,
        "prob": 61.3,
        "ev_pct": -3.8,
        "cuota_justa": 1.59,
        "cuota_segura": 1.77,
        "acierto_hist": 62.9,
        "n_hist": 224
      },
      {
        "mercado": "hcp2_des",
        "linea": null,
        "etiqueta": "HCP +2 Valencia",
        "cuota": 1.25,
        "prob": 79.4,
        "ev_pct": -0.7
      },
      {
        "mercado": "hcp3_des",
        "linea": null,
        "etiqueta": "HCP +3 Valencia",
        "cuota": 1.07,
        "prob": 92.6,
        "ev_pct": -0.9
      },
      {
        "mercado": "corners65",
        "linea": null,
        "etiqueta": "Over 6.5 corners",
        "cuota": 1.28,
        "prob": 82.0,
        "ev_pct": 5.0,
        "filtro_edge": "a=0.08 (Platt no discrimina)"
      },
      {
        "mercado": "local_corners_equipo",
        "linea": 2.5,
        "etiqueta": "Sevilla Corners equipo Over 2.5",
        "cuota": 1.13,
        "prob": 81.9,
        "ev_pct": -7.5,
        "tipo": "POR_EQUIPO"
      },
      {
        "mercado": "local_corners_equipo",
        "linea": 3.5,
        "etiqueta": "Sevilla Corners equipo Over 3.5",
        "cuota": 1.32,
        "prob": 67.6,
        "ev_pct": -10.8,
        "tipo": "POR_EQUIPO",
        "cuota_justa": 1.44,
        "cuota_segura": 1.56,
        "acierto_hist": 69.2,
        "n_hist": 325
      },
      {
        "mercado": "local_remates_puerta",
        "linea": 3.5,
        "etiqueta": "Sevilla Remates a puerta Over 3.5",
        "cuota": 1.5,
        "prob": 65.1,
        "ev_pct": -2.4,
        "tipo": "POR_EQUIPO",
        "cuota_justa": 1.52,
        "cuota_segura": 1.68,
        "acierto_hist": 65.7,
        "n_hist": 236
      },
      {
        "mercado": "under45+hcp2_visit",
        "linea": null,
        "etiqueta": "Under 4.5 + HCP +2 V",
        "cuota": 1.34,
        "prob": 74.4,
        "ev_pct": -0.3,
        "tipo": "COMBINADA",
        "patas": [
          "under45",
          "hcp2_visit"
        ],
        "lift": 1.038,
        "cuota_justa": 1.35,
        "cuota_segura": 1.46,
        "acierto_hist": 73.8,
        "n_hist": 298
      },
      {
        "mercado": "under35+hcp2_visit",
        "linea": null,
        "etiqueta": "Under 3.5 + HCP +2 V",
        "cuota": 1.47,
        "prob": 68.0,
        "ev_pct": 0.0,
        "tipo": "COMBINADA",
        "patas": [
          "under35",
          "hcp2_visit"
        ],
        "lift": 1.106,
        "cuota_justa": 1.48,
        "cuota_segura": 1.62,
        "acierto_hist": 67.7,
        "n_hist": 269
      },
      {
        "mercado": "over15+over05_local",
        "linea": null,
        "etiqueta": "Over 1.5 + Over 0.5 L",
        "cuota": 1.53,
        "prob": 59.2,
        "ev_pct": -9.5,
        "tipo": "COMBINADA",
        "patas": [
          "over15",
          "over05_local"
        ],
        "lift": 1.158,
        "cuota_justa": 1.75,
        "cuota_segura": 1.98,
        "acierto_hist": 57.1,
        "n_hist": 210
      },
      {
        "mercado": "under35+hcp2_local",
        "linea": null,
        "etiqueta": "Under 3.5 + HCP +2 L",
        "cuota": 1.3,
        "prob": 74.6,
        "ev_pct": -3.0,
        "tipo": "COMBINADA",
        "patas": [
          "under35",
          "hcp2_local"
        ],
        "lift": 1.053,
        "cuota_justa": 1.37,
        "cuota_segura": 1.5,
        "acierto_hist": 73.2,
        "n_hist": 205
      }
    ],
    "mercados_snapshot": {
      "victoria_local": 44.7,
      "empate": 31.5,
      "victoria_visit": 25.3,
      "do1x": 74.8,
      "dox2": 55.3,
      "over15": 70.1,
      "over25": 41.7,
      "under25": 58.3,
      "over35": 19.1,
      "under35": 80.9,
      "under45": 92.2,
      "btts": 51.3,
      "over05_local": 74.6,
      "over05_visit": 61.3,
      "hcp2_des": 79.4,
      "hcp3_des": 92.6,
      "corners65": 82.0,
      "local_remates_over7.5": 94.0,
      "local_remates_over8.5": 90.2,
      "local_remates_over9.5": 85.2,
      "local_remates_over10.5": 79.0,
      "local_remates_over11.5": 72.0,
      "local_remates_over12.5": 64.2,
      "local_remates_over13.5": 56.2,
      "local_remates_over14.5": 48.1,
      "local_remates_over15.5": 40.4,
      "local_remates_puerta_over1.5": 93.1,
      "local_remates_puerta_over2.5": 81.6,
      "local_remates_puerta_over3.5": 65.1,
      "local_remates_puerta_over4.5": 47.1,
      "local_remates_puerta_over5.5": 30.8,
      "local_remates_puerta_over6.5": 18.4,
      "local_corners_equipo_over2.5": 81.9,
      "local_corners_equipo_over3.5": 67.6,
      "local_corners_equipo_over4.5": 52.2,
      "local_corners_equipo_over5.5": 37.8,
      "local_corners_equipo_over6.5": 25.8,
      "local_corners_equipo_over7.5": 16.7,
      "visit_remates_over7.5": 59.6,
      "visit_remates_over8.5": 48.0,
      "visit_remates_over9.5": 37.1,
      "visit_remates_over10.5": 27.6,
      "visit_remates_over11.5": 19.8,
      "visit_remates_over12.5": 13.7,
      "visit_remates_over13.5": 9.2,
      "visit_remates_over14.5": 6.0,
      "visit_remates_over15.5": 3.8,
      "visit_remates_puerta_over1.5": 78.0,
      "visit_remates_puerta_over2.5": 55.5,
      "visit_remates_puerta_over3.5": 33.9,
      "visit_remates_puerta_over4.5": 18.0,
      "visit_remates_puerta_over5.5": 8.5,
      "visit_remates_puerta_over6.5": 3.6,
      "visit_corners_equipo_over2.5": 57.5,
      "visit_corners_equipo_over3.5": 37.9,
      "visit_corners_equipo_over4.5": 22.6,
      "visit_corners_equipo_over5.5": 12.4,
      "visit_corners_equipo_over6.5": 6.3,
      "visit_corners_equipo_over7.5": 3.0
    },
    "cruces_validados": [
      {
        "mercado": "do1x",
        "etiqueta": "DO L o Empate",
        "cuota": 1.28,
        "justa": 1.42,
        "segura": 1.57,
        "hist": 70.6,
        "n": 194,
        "cruza": false,
        "cruza_segura": false
      },
      {
        "mercado": "over05_local",
        "etiqueta": "Over 0.5 L",
        "cuota": 1.29,
        "justa": 1.38,
        "segura": 1.51,
        "hist": 72.3,
        "n": 238,
        "cruza": false,
        "cruza_segura": false
      },
      {
        "mercado": "over05_visit",
        "etiqueta": "Over 0.5 V",
        "cuota": 1.57,
        "justa": 1.59,
        "segura": 1.77,
        "hist": 62.9,
        "n": 224,
        "cruza": false,
        "cruza_segura": false
      },
      {
        "mercado": "local_corners_equipo_over3.5",
        "etiqueta": "Sevilla Corners Over 3.5",
        "cuota": 1.32,
        "justa": 1.44,
        "segura": 1.56,
        "hist": 69.2,
        "n": 325,
        "cruza": false,
        "cruza_segura": false
      },
      {
        "mercado": "local_remates_puerta_over3.5",
        "etiqueta": "Sevilla Remates a puerta Over 3.5",
        "cuota": 1.5,
        "justa": 1.52,
        "segura": 1.68,
        "hist": 65.7,
        "n": 236,
        "cruza": false,
        "cruza_segura": false
      },
      {
        "mercado": "under45+hcp2_visit",
        "etiqueta": "Under 4.5 + HCP +2 V",
        "cuota": 1.34,
        "justa": 1.35,
        "segura": 1.46,
        "hist": 73.8,
        "n": 298,
        "cruza": false,
        "cruza_segura": false
      },
      {
        "mercado": "under35+hcp2_visit",
        "etiqueta": "Under 3.5 + HCP +2 V",
        "cuota": 1.47,
        "justa": 1.48,
        "segura": 1.62,
        "hist": 67.7,
        "n": 269,
        "cruza": false,
        "cruza_segura": false
      },
      {
        "mercado": "over15+over05_local",
        "etiqueta": "Over 1.5 + Over 0.5 L",
        "cuota": 1.53,
        "justa": 1.75,
        "segura": 1.98,
        "hist": 57.1,
        "n": 210,
        "cruza": false,
        "cruza_segura": false
      },
      {
        "mercado": "under35+hcp2_local",
        "etiqueta": "Under 3.5 + HCP +2 L",
        "cuota": 1.3,
        "justa": 1.37,
        "segura": 1.5,
        "hist": 73.2,
        "n": 205,
        "cruza": false,
        "cruza_segura": false
      }
    ],
    "validadas": [
      {
        "mercado": "local_corners_equipo_over3.5",
        "etiqueta": "Sevilla Corners Over 3.5",
        "tipo": "por equipo",
        "p": 0.6763,
        "cuota_justa": 1.44,
        "cuota_segura": 1.56,
        "acierto_hist": 69.2,
        "n_hist": 325,
        "cotizada": true
      },
      {
        "mercado": "under45+hcp2_visit",
        "etiqueta": "Under 4.5 + HCP +2 V",
        "tipo": "COMBINADA",
        "p": 0.7439,
        "cuota_justa": 1.35,
        "cuota_segura": 1.46,
        "acierto_hist": 73.8,
        "n_hist": 298,
        "cotizada": true
      },
      {
        "mercado": "over15+hcp3_local",
        "etiqueta": "Over 1.5 + HCP +3 L",
        "tipo": "COMBINADA",
        "p": 0.6327,
        "cuota_justa": 1.56,
        "cuota_segura": 1.71,
        "acierto_hist": 64.1,
        "n_hist": 284,
        "cotizada": false
      },
      {
        "mercado": "under35+hcp2_visit",
        "etiqueta": "Under 3.5 + HCP +2 V",
        "tipo": "COMBINADA",
        "p": 0.6805,
        "cuota_justa": 1.48,
        "cuota_segura": 1.62,
        "acierto_hist": 67.7,
        "n_hist": 269,
        "cotizada": true
      },
      {
        "mercado": "over05_local",
        "etiqueta": "Over 0.5 L",
        "tipo": "simple",
        "p": 0.7458,
        "cuota_justa": 1.38,
        "cuota_segura": 1.51,
        "acierto_hist": 72.3,
        "n_hist": 238,
        "cotizada": true
      },
      {
        "mercado": "hcp2_visit",
        "etiqueta": "HCP +2 V",
        "tipo": "simple",
        "p": 0.794,
        "cuota_justa": 1.26,
        "cuota_segura": 1.36,
        "acierto_hist": 79.3,
        "n_hist": 237,
        "cotizada": false
      },
      {
        "mercado": "local_remates_puerta_over3.5",
        "etiqueta": "Sevilla Remates a puerta Over 3.5",
        "tipo": "por equipo",
        "p": 0.6512,
        "cuota_justa": 1.52,
        "cuota_segura": 1.68,
        "acierto_hist": 65.7,
        "n_hist": 236,
        "cotizada": true
      },
      {
        "mercado": "local_remates_over10.5",
        "etiqueta": "Sevilla Remates Over 10.5",
        "tipo": "por equipo",
        "p": 0.7905,
        "cuota_justa": 1.29,
        "cuota_segura": 1.4,
        "acierto_hist": 77.3,
        "n_hist": 233,
        "cotizada": false
      },
      {
        "mercado": "dox2+hcp3_local",
        "etiqueta": "DO Empate o V + HCP +3 L",
        "tipo": "COMBINADA",
        "p": 0.5271,
        "cuota_justa": 1.93,
        "cuota_segura": 2.21,
        "acierto_hist": 51.7,
        "n_hist": 230,
        "cotizada": false
      },
      {
        "mercado": "local_corners_equipo_over2.5+local_remates_over10.5",
        "etiqueta": "L Corners Over 2.5 + L Remates Over 10.5",
        "tipo": "COMBINADA",
        "p": 0.6978,
        "cuota_justa": 1.42,
        "cuota_segura": 1.56,
        "acierto_hist": 70.5,
        "n_hist": 227,
        "cotizada": false
      },
      {
        "mercado": "local_remates_puerta_over3.5+over05_local",
        "etiqueta": "L Remates a puerta Over 3.5 + Over 0.5 L",
        "tipo": "COMBINADA",
        "p": 0.5537,
        "cuota_justa": 1.65,
        "cuota_segura": 1.85,
        "acierto_hist": 60.4,
        "n_hist": 225,
        "cotizada": false
      },
      {
        "mercado": "over05_visit",
        "etiqueta": "Over 0.5 V",
        "tipo": "simple",
        "p": 0.6132,
        "cuota_justa": 1.59,
        "cuota_segura": 1.77,
        "acierto_hist": 62.9,
        "n_hist": 224,
        "cotizada": true
      },
      {
        "mercado": "local_corners_equipo_over2.5+local_remates_over9.5",
        "etiqueta": "L Corners Over 2.5 + L Remates Over 9.5",
        "tipo": "COMBINADA",
        "p": 0.7441,
        "cuota_justa": 1.34,
        "cuota_segura": 1.46,
        "acierto_hist": 74.6,
        "n_hist": 213,
        "cotizada": false
      },
      {
        "mercado": "over15+over05_local",
        "etiqueta": "Over 1.5 + Over 0.5 L",
        "tipo": "COMBINADA",
        "p": 0.5917,
        "cuota_justa": 1.75,
        "cuota_segura": 1.98,
        "acierto_hist": 57.1,
        "n_hist": 210,
        "cotizada": true
      },
      {
        "mercado": "local_corners_equipo_over4.5+local_remates_over9.5",
        "etiqueta": "L Corners Over 4.5 + L Remates Over 9.5",
        "tipo": "COMBINADA",
        "p": 0.503,
        "cuota_justa": 1.84,
        "cuota_segura": 2.1,
        "acierto_hist": 54.3,
        "n_hist": 208,
        "cotizada": false
      },
      {
        "mercado": "under35+hcp2_local",
        "etiqueta": "Under 3.5 + HCP +2 L",
        "tipo": "COMBINADA",
        "p": 0.7463,
        "cuota_justa": 1.37,
        "cuota_segura": 1.5,
        "acierto_hist": 73.2,
        "n_hist": 205,
        "cotizada": true
      },
      {
        "mercado": "local_remates_puerta_over2.5+over05_local",
        "etiqueta": "L Remates a puerta Over 2.5 + Over 0.5 L",
        "tipo": "COMBINADA",
        "p": 0.6607,
        "cuota_justa": 1.5,
        "cuota_segura": 1.67,
        "acierto_hist": 66.7,
        "n_hist": 204,
        "cotizada": false
      },
      {
        "mercado": "local_remates_over8.5+local_remates_puerta_over2.5",
        "etiqueta": "L Remates Over 8.5 + L Remates a puerta Over 2.5",
        "tipo": "COMBINADA",
        "p": 0.7994,
        "cuota_justa": 1.33,
        "cuota_segura": 1.45,
        "acierto_hist": 75.2,
        "n_hist": 202,
        "cotizada": false
      },
      {
        "mercado": "do1x",
        "etiqueta": "DO L o Empate",
        "tipo": "simple",
        "p": 0.7475,
        "cuota_justa": 1.42,
        "cuota_segura": 1.57,
        "acierto_hist": 70.6,
        "n_hist": 194,
        "cotizada": true
      },
      {
        "mercado": "local_remates_over11.5+local_remates_puerta_over3.5",
        "etiqueta": "L Remates Over 11.5 + L Remates a puerta Over 3.5",
        "tipo": "COMBINADA",
        "p": 0.5574,
        "cuota_justa": 1.75,
        "cuota_segura": 2.0,
        "acierto_hist": 57.1,
        "n_hist": 189,
        "cotizada": false
      },
      {
        "mercado": "local_remates_over9.5+local_remates_puerta_over2.5",
        "etiqueta": "L Remates Over 9.5 + L Remates a puerta Over 2.5",
        "tipo": "COMBINADA",
        "p": 0.7643,
        "cuota_justa": 1.3,
        "cuota_segura": 1.44,
        "acierto_hist": 76.6,
        "n_hist": 167,
        "cotizada": false
      },
      {
        "mercado": "under25+hcp2_visit",
        "etiqueta": "Under 2.5 + HCP +2 V",
        "tipo": "COMBINADA",
        "p": 0.519,
        "cuota_justa": 1.99,
        "cuota_segura": 2.34,
        "acierto_hist": 50.3,
        "n_hist": 163,
        "cotizada": false
      },
      {
        "mercado": "local_remates_over10.5+local_remates_puerta_over2.5",
        "etiqueta": "L Remates Over 10.5 + L Remates a puerta Over 2.5",
        "tipo": "COMBINADA",
        "p": 0.7156,
        "cuota_justa": 1.41,
        "cuota_segura": 1.57,
        "acierto_hist": 71.2,
        "n_hist": 156,
        "cotizada": false
      },
      {
        "mercado": "local_corners_equipo_over2.5+local_remates_over12.5",
        "etiqueta": "L Corners Over 2.5 + L Remates Over 12.5",
        "tipo": "COMBINADA",
        "p": 0.5643,
        "cuota_justa": 1.76,
        "cuota_segura": 2.04,
        "acierto_hist": 56.8,
        "n_hist": 155,
        "cotizada": false
      },
      {
        "mercado": "do1x+local_remates_puerta_over2.5",
        "etiqueta": "DO L o Empate + L Remates a puerta Over 2.5",
        "tipo": "COMBINADA",
        "p": 0.6534,
        "cuota_justa": 1.5,
        "cuota_segura": 1.7,
        "acierto_hist": 66.7,
        "n_hist": 150,
        "cotizada": false
      }
    ]
  }
];
