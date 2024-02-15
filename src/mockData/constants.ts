export const roles = [
    {
        "id": 1,
        "name": "root",
        "description": "El administrador general del sistema"
    },
    {
        "id": 2,
        "name": "admin",
        "description": "Administrador de uno o mas condominios"
    },
    {
        "id": 3,
        "name": "client",
        "description": "Residente de uno o mas condominios"
    } 
]

export const task = [
    {
        "id": 101,
        "controller": "Gestion de condominios",
        "action":"CRUD",
        "description": "El administrador general puede ver, crear, actualizar y eliminar condominios",
        "title":"ROOT",
        "image":"stringImage"
    },
    {
        "id": 102,
        "controller": "Estadisticas generales",
        "action":"Dashboard",
        "description": "El administrador general vera absolutamente toda la informacion del sistema",
        "title":"ROOT",
        "image":"stringImage"
    },



    {
        "id": 201,
        "controller": "Gestión de Residentes",
        "action": "CRUD residentes",
        "description": "Agregar nuevo residente a un determinado condominio del cual es administrador",
        "title": "Agregar Nuevo Residente",
        "image": "url_de_la_imagen_"
    },
    {
        "id": 202,
        "controller": "Gestión de Cobros para sus condominios",
        "action": "CRUD cobros",
        "description": "El administrador de un condominio puede agregar cobros segun sus necesidades",
        "title": "Cobros",
        "image": "url_de_la_imagen"
    },



    {
        "id": 301,
        "controller": "Pagos y Facturación",
        "action": "Pagar",
        "description": "Los clientes pueden realizar sus pagos pendientes y ver su historial",
        "title": "Registrar Pago de Cuotas",
        "image": "url_de_la_imagen"
    },

]

export const task_in_role = [
    //root
    {
        "id": 51,
        "role_id": 1,
        "task_id": 101
    },
    {
        "id": 52,
        "role_id": 1,
        "task_id": 102
    },
    //admin 
    {
        "id": 53,
        "role_id": 2,
        "task_id": 201
    },
    {
        "id": 54,
        "role_id": 2,
        "task_id": 202
    },
    //client
    {
        "id": 55,
        "role_id": 3,
        "task_id": 301
    }
]