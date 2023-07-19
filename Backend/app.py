from flask import Flask
from pymongo import MongoClient
from flask import Flask, request
from flask import jsonify

from bson.objectid import ObjectId
      
app = Flask(__name__)
client = MongoClient("mongodb+srv://faizanmd:faizan123@cluster0.defifv6.mongodb.net/nebuladb?retryWrites=true&w=majority")
db = client["nebuladb"]

@app.route("/")
def home():
    return "Welcome to NEBULA Projects"
#-----------------------------------------------------------------

#-----------------------------POST DATA------------------------------------
@app.route("/host", methods=["POST"])
def create_host():
    class Host:
        def __init__(self, name, status, location, propertyType, about, hostingTime):
            self._id = ObjectId()
            self.name = name
            self.status = status
            self.location = location
            self.propertyType = propertyType
            self.about = about
            self.hostingTime = hostingTime

    def add_host(host_data):
        hosts_collection = db["host"]
        host = Host(
            host_data["name"],
            host_data["status"],
            host_data["location"],
            host_data["propertyType"],
            host_data["about"],
            host_data["hostingTime"]
        )
        host_data = {
            "_id": host._id,
            "name": host.name,
            "status": host.status,
            "location": host.location,
            "propertyType": host.propertyType,
            "about": host.about,
            "hostingTime": host.hostingTime
        }
        hosts_collection.insert_one(host_data)

    host_data = request.get_json()
    add_host(host_data)

    return "Host created successfully!"

#---------------------------GET DATA--------------------------------------


# ----------------Getinng Error While making GET request-------------------------
@app.route("/hosts", methods=["GET"])
def get_hosts():
    hosts_collection = db["host"]
    hosts = []
    for host_data in hosts_collection.find():
        host = {
            "id": str(host_data["_id"]),
            "name": host_data["name"],
            "status": host_data["status"],
            "location": host_data["location"],
            "propertyType": host_data["propertyType"],
            "about": host_data["about"],
            "hostingTime": host_data["hostingTime"]
        }
        hosts.append(host)
    return jsonify(hosts)
    
#-----------------------------------------------------------------

@app.route("/hosts/<host_id>", methods=["DELETE"])
def delete_host(host_id):
    hosts_collection = db["host"]
    result = hosts_collection.delete_one({"_id": ObjectId(host_id)})
    if result.deleted_count == 1:
        return jsonify({"message": "Host deleted successfully"})
    else:
        return jsonify({"error": "Host not found"}), 404


#-----------------------------------------------------------------
#-----------------------------------------------------------------
if __name__ == "__main__":
    app.run()

