it('should return user by object id', async () => {
    const tenant = await createTenant();
    const user = await createUser({ tenant });

    // my token uses tenant and user
    const authorization = base64(`${tenant._id}:${user._id}`);

    const url = getUrl(user._id.toString());

    const response = await createGetApiCall({ url, authorization });

    expect(response.status).toBe(200);
    expect(response.body.user).not.toBe(null);
});