"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crmController_1 = require("../controllers/crmController");
class Routes {
    constructor() {
        this.contactController = new crmController_1.ContactController();
    }
    routes(app) {
        app.route('/')
            .get((req, res) => {
            res.status(200).send({ message: "Get request successfull !" });
        });
        // Contact
        app.route('/contact')
            // GET endpoint
            // Get all contacts
            .get(this.contactController.getContacts)
            // POST endpoint
            // Create new contact
            .post(this.contactController.addNewContact);
        // Contact detail
        app.route('/contact/:contactId')
            // get specific contact
            .get(this.contactController.getContactWithID)
            // Update a contact
            .put(this.contactController.updateContact)
            // Delete a contact
            .delete(this.contactController.deleteContact);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=crmRoutes.js.map