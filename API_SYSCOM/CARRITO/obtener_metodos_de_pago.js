[
    {
        "nombre": "Transferencia",
        "metodo": {
            "transferencia": {
                "titulo": "Transferencia electrónica de fondos",
                "codigo": "03",
                "descuento": 4,
                "tipo_cambio": "preferencial",
                "plazo": 1,
                "forma": {
                    "PUE": 1,
                    "PPD": 2
                }
            }
        }
    },
    {
        "nombre": "Paynet",
        "metodo": {
            "paynet": {
                "titulo": "Pago en tienda de conveniencia",
                "codigo": "01",
                "descuento": 4,
                "tipo_cambio": "preferencial",
                "plazo": 1,
                "forma": {
                    "PUE": 1
                }
            }
        }
    },
    {
        "nombre": "Sucursal",
        "metodo": {
            "sucursal-efectivo": {
                "titulo": "Efectivo",
                "codigo": "01",
                "descuento": 4,
                "tipo_cambio": "normal",
                "plazo": 1,
                "forma": {
                    "PUE": 1,
                    "PPD": 2
                }
            },
            "sucursal-cheque": {
                "titulo": "Cheque nominativo",
                "codigo": "02",
                "descuento": 4,
                "tipo_cambio": "normal",
                "plazo": 1,
                "forma": {
                    "PUE": 1,
                    "PPD": 2
                }
            },
            "sucursal-credito": {
                "titulo": "Tarjeta de Crédito / Call Center",
                "codigo": "04",
                "descuento": 3,
                "tipo_cambio": "normal",
                "plazo": 1,
                "forma": {
                    "PUE": 1,
                    "PPD": 2
                }
            },
            "sucursal-debito": {
                "titulo": "Tarjeta de Débito / Call Center",
                "codigo": "28",
                "descuento": 3,
                "tipo_cambio": "normal",
                "plazo": 1,
                "forma": {
                    "PUE": 1,
                    "PPD": 2
                }
            }
        }
    },
    {
        "nombre": "Credito",
        "metodo": {
            "credito-1": {
                "titulo": "1 día",
                "codigo": "99",
                "descuento": 4,
                "tipo_cambio": "un_dia",
                "plazo": 1,
                "forma": {
                    "PUE": 1,
                    "PPD": 2
                }
            },
            "credito-7": {
                "titulo": "7 días",
                "codigo": "99",
                "descuento": 3,
                "tipo_cambio": "una_semana",
                "plazo": 7,
                "forma": {
                    "PUE": 1,
                    "PPD": 2
                }
            },
            "credito-15": {
                "titulo": "15 días",
                "codigo": "99",
                "descuento": 2,
                "tipo_cambio": "dos_semanas",
                "plazo": 15,
                "forma": {
                    "PUE": 1,
                    "PPD": 2
                }
            },
            "credito-30": {
                "titulo": "30 días",
                "codigo": "99",
                "descuento": 0,
                "tipo_cambio": "tres_semanas",
                "plazo": 30,
                "forma": {
                    "PUE": 1,
                    "PPD": 2
                }
            },
            "credito-45": {
                "titulo": "45 días",
                "codigo": "99",
                "descuento": 0,
                "plazo": 45,
                "tipo_cambio": "un_mes",
                "forma": {
                    "PUE": 1,
                    "PPD": 2
                }
            }
        }
    }
]