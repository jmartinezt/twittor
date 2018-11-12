function actualizarCacheDinamico(dynamicCache, req, res) {

    if (res.ok) {

        caches.open(dynamicCache).then(cache => {
            cache.put(req, res.clone());

            res.clone();
        });
    } else {
        return res;
    }


}