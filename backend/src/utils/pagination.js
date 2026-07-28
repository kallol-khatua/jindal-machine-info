export function getPagination(query) {

    const page = Math.max(parseInt(query.page || 1, 10), 1);

    const limit = Math.min(
        Math.max(parseInt(query.limit || 10, 10), 1),
        100
    );

    const skip = (page - 1) * limit;

    const sort = query.sort || "createdAt";

    const order = query.order === "asc" ? 1 : -1;

    return {
        page,
        limit,
        skip,
        sort: {
            [sort]: order,
        },
    };

}