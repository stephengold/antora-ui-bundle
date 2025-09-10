// Gradle script to clean up the antora-ui-bundle project

plugins {
    base // to add a "clean" task to the project
    java // to define source sets
}

sourceSets.main {
    resources {
        srcDir("src") // for NetBeans access
    }
}

// Register cleanup tasks:

tasks.named("clean") {
    dependsOn("cleanModules", "cleanPublic")
}
tasks.register<Delete>("cleanModules") {
    delete("node_modules")
}
tasks.register<Delete>("cleanPublic") {
    delete("public")
}
