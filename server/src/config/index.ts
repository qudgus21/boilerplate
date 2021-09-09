
export default {
    port: parseInt(process.env.PORT || '5000', 10),
    mode: process.env.NODE_ENV || 'development'

};