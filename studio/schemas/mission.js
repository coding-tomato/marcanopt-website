export default {
    name: "mission",
    title: "Misión",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Nombre",
            type: "string",
        },
        {
            name: "phrase",
            title: "Comentario",
            type: "text",
            validation: Rule => Rule.max(100).warning("El título no debe ser de más de 100 caracteres.")
        },
        {
            name: "picture",
            title: "Foto",
            type: "image",
            options: {
                hotspot: true,
            }
        },
    ],
};

