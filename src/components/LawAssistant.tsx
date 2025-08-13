import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle2, XCircle, AlertTriangle, Calculator, FileCheck } from "lucide-react";

interface EvaluationResult {
  isSubject: boolean;
  requiresTRC: boolean;
  requiresRCD: boolean;
  reason: string;
  articles: string[];
  warnings: string[];
}

const LawAssistant = () => {
  const [constructionType, setConstructionType] = useState("");
  const [floors, setFloors] = useState("");
  const [totalArea, setTotalArea] = useState("");
  const [commercialArea, setCommercialArea] = useState("");
  const [isStateProject, setIsStateProject] = useState(false);
  const [isInfrastructure, setIsInfrastructure] = useState(false);
  const [isModification, setIsModification] = useState(false);
  const [result, setResult] = useState<EvaluationResult | null>(null);

  const evaluateProject = () => {
    const floorsNum = parseInt(floors) || 0;
    const totalAreaNum = parseInt(totalArea) || 0;
    const commercialAreaNum = parseInt(commercialArea) || 0;

    // Initialize result
    const evaluation: EvaluationResult = {
      isSubject: false,
      requiresTRC: false,
      requiresRCD: false,
      reason: "",
      articles: [],
      warnings: []
    };

    // Check exclusions first (Article 157-19)
    if (isStateProject) {
      evaluation.reason = "Projet exclu : Ouvrage construit pour le compte de l'État ou des collectivités territoriales";
      evaluation.articles = ["Article 157-19 (1°)"];
      setResult(evaluation);
      return;
    }

    if (isInfrastructure) {
      evaluation.reason = "Projet exclu : Infrastructures, ouvrages d'art ou équipements publics";
      evaluation.articles = ["Article 157-19 (2° à 4°)"];
      setResult(evaluation);
      return;
    }

    if (isModification) {
      evaluation.reason = "Projet exclu : Modification d'ouvrage existant";
      evaluation.articles = ["Article 157-19 (5°)"];
      setResult(evaluation);
      return;
    }

    // Check application criteria (Article 157-18)
    let isSubject = false;

    // Housing conditions
    if (constructionType === "habitation" || constructionType === "mixte") {
      if (floorsNum > 3 || totalAreaNum > 800) {
        isSubject = true;
        evaluation.articles.push("Article 157-18 (1°)");
      }
    }

    // Mixed use additional conditions
    if (constructionType === "mixte" && commercialAreaNum > 400) {
      isSubject = true;
      evaluation.articles.push("Article 157-18 (2°)");
    }

    // Commercial/Industrial buildings
    if (["commercial", "industriel", "bureaux", "hotelier", "medical", "enseignement", "culturel", "sportif", "gradins"].includes(constructionType)) {
      if (totalAreaNum > 400) {
        isSubject = true;
        evaluation.articles.push("Article 157-18 (3° à 7°)");
      }
    }

    evaluation.isSubject = isSubject;
    evaluation.requiresTRC = isSubject;
    evaluation.requiresRCD = isSubject;

    if (isSubject) {
      evaluation.reason = "Projet assujetti à la loi 59-13 : Les critères d'application sont remplis";
      
      // Add specific warnings
      if (floorsNum >= 5) {
        evaluation.warnings.push("Attention : Bâtiment ≥ 5 étages - Étude de mitoyenneté requise (Article 157-4)");
      }
      
      if (totalAreaNum > 10000) {
        evaluation.warnings.push("Attention : Superficie importante - Vérifier les plafonds de garantie minimums");
      }
    } else {
      evaluation.reason = "Projet non assujetti : Ne remplit pas les critères d'application de la loi 59-13";
    }

    setResult(evaluation);
  };

  const resetForm = () => {
    setConstructionType("");
    setFloors("");
    setTotalArea("");
    setCommercialArea("");
    setIsStateProject(false);
    setIsInfrastructure(false);
    setIsModification(false);
    setResult(null);
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-lg">
        <CardHeader className="bg-gradient-to-r from-primary to-primary-light text-primary-foreground">
          <CardTitle className="flex items-center space-x-3">
            <Calculator className="h-6 w-6" />
            <span>Assistant d'Évaluation - Loi 59-13</span>
          </CardTitle>
          <CardDescription className="text-primary-foreground/90">
            Déterminez si votre projet de construction est assujetti aux obligations d'assurance
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Form */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileCheck className="h-5 w-5" />
              <span>Informations du projet</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="constructionType">Type de construction</Label>
                <Select value={constructionType} onValueChange={setConstructionType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez le type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="habitation">Habitation uniquement</SelectItem>
                    <SelectItem value="mixte">Habitation + Commercial/Autre</SelectItem>
                    <SelectItem value="commercial">Commercial/Artisanal</SelectItem>
                    <SelectItem value="industriel">Industriel</SelectItem>
                    <SelectItem value="bureaux">Bureaux/Services</SelectItem>
                    <SelectItem value="hotelier">Hôtelier/Hébergement</SelectItem>
                    <SelectItem value="medical">Établissement médical</SelectItem>
                    <SelectItem value="enseignement">Enseignement</SelectItem>
                    <SelectItem value="culturel">Culturel/Social</SelectItem>
                    <SelectItem value="sportif">Activités sportives</SelectItem>
                    <SelectItem value="gradins">Gradins/Tribunes</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="floors">Nombre d'étages</Label>
                  <Input
                    id="floors"
                    type="number"
                    value={floors}
                    onChange={(e) => setFloors(e.target.value)}
                    placeholder="ex: 4"
                  />
                </div>
                <div>
                  <Label htmlFor="totalArea">Superficie totale (m²)</Label>
                  <Input
                    id="totalArea"
                    type="number"
                    value={totalArea}
                    onChange={(e) => setTotalArea(e.target.value)}
                    placeholder="ex: 1200"
                  />
                </div>
              </div>

              {constructionType === "mixte" && (
                <div>
                  <Label htmlFor="commercialArea">Superficie commerciale/autre (m²)</Label>
                  <Input
                    id="commercialArea"
                    type="number"
                    value={commercialArea}
                    onChange={(e) => setCommercialArea(e.target.value)}
                    placeholder="ex: 500"
                  />
                </div>
              )}

              <div className="space-y-3">
                <Label>Exclusions potentielles</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="stateProject"
                      checked={isStateProject}
                      onCheckedChange={(checked) => setIsStateProject(checked as boolean)}
                    />
                    <Label htmlFor="stateProject" className="text-sm">
                      Projet de l'État ou collectivités territoriales
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="infrastructure"
                      checked={isInfrastructure}
                      onCheckedChange={(checked) => setIsInfrastructure(checked as boolean)}
                    />
                    <Label htmlFor="infrastructure" className="text-sm">
                      Infrastructure (route, pont, barrage, etc.)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="modification"
                      checked={isModification}
                      onCheckedChange={(checked) => setIsModification(checked as boolean)}
                    />
                    <Label htmlFor="modification" className="text-sm">
                      Modification d'ouvrage existant
                    </Label>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-3">
              <Button onClick={evaluateProject} className="flex-1">
                <Calculator className="h-4 w-4 mr-2" />
                Évaluer
              </Button>
              <Button variant="outline" onClick={resetForm}>
                Réinitialiser
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Result */}
        {result && (
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                {result.isSubject ? (
                  <CheckCircle2 className="h-5 w-5 text-success" />
                ) : (
                  <XCircle className="h-5 w-5 text-destructive" />
                )}
                <span>Résultat de l'évaluation</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className={`p-4 rounded-lg ${result.isSubject ? 'bg-success/10' : 'bg-muted'}`}>
                <p className="font-medium">{result.reason}</p>
              </div>

              {result.isSubject && (
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="border-success text-success">
                      <CheckCircle2 className="h-3 w-3 mr-1" />
                      TRC Obligatoire
                    </Badge>
                    <Badge variant="outline" className="border-success text-success">
                      <CheckCircle2 className="h-3 w-3 mr-1" />
                      RC Décennale Obligatoire
                    </Badge>
                  </div>
                </div>
              )}

              {result.warnings.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-medium text-warning flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Points d'attention
                  </h4>
                  {result.warnings.map((warning, index) => (
                    <div key={index} className="bg-warning/10 p-3 rounded text-sm">
                      {warning}
                    </div>
                  ))}
                </div>
              )}

              <div>
                <h4 className="font-medium mb-2">Articles de référence :</h4>
                <div className="space-y-1">
                  {result.articles.map((article, index) => (
                    <Badge key={index} variant="secondary" className="mr-2 mb-1">
                      {article}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default LawAssistant;